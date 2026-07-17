from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
import google.generativeai as genai
import os
import json
from dotenv import load_dotenv
from datetime import datetime

# Load Environment Variables
load_dotenv()

# Initialize FastAPI
app = FastAPI(title="AI Learning Roadmap API")

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection (Fallback to a mock object if MONGO_URI is missing)
MONGO_URI = os.getenv("MONGO_URI")
if MONGO_URI:
    client = AsyncIOMotorClient(MONGO_URI)
    db = client.ai_learning_db
else:
    print("WARNING: MONGO_URI not found in .env. Progress will not be saved.")
    db = None

# Gemini AI Setup
GEMINI_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_KEY:
    genai.configure(api_key=GEMINI_KEY)
    model = genai.GenerativeModel('gemini-1.5-pro')
else:
    print("WARNING: GEMINI_API_KEY not found in .env. Will use mock data.")
    model = None

# --- Pydantic Models ---
class TopicRequest(BaseModel):
    topic: str
    userId: str

class ProgressUpdate(BaseModel):
    userId: str
    topic: str
    stepId: str
    completed: bool

# --- Routes ---

@app.post("/api/generate-roadmap")
async def generate_roadmap(req: TopicRequest):
    """Generates a roadmap using Gemini, saves it to MongoDB, and returns it."""
    
    # Check existing roadmap
    if db is not None:
        existing_roadmap = await db.roadmaps.find_one({"topic": req.topic.lower()})
        if existing_roadmap:
            existing_roadmap["_id"] = str(existing_roadmap["_id"])
            return existing_roadmap

    if model is None:
        # Mock Data if no API key
        mock_roadmap = {
            "topic": req.topic.lower(),
            "steps": [
                {
                    "id": "step_1",
                    "title": "Introduction to " + req.topic,
                    "description": "Understand the foundational concepts.",
                    "subtopics": ["Concept A", "Concept B"]
                },
                {
                    "id": "step_2",
                    "title": "Advanced Applications",
                    "description": "Learn how this is applied in the real world.",
                    "subtopics": ["Use Case 1", "Use Case 2"]
                }
            ]
        }
        return mock_roadmap

    prompt = f"""
    Create a highly detailed, step-by-step learning roadmap for the topic: '{req.topic}'.
    You MUST return ONLY valid JSON in the exact structure below. Do not include markdown formatting like ```json.
    {{
        "topic": "{req.topic.lower()}",
        "steps": [
            {{
                "id": "step_1",
                "title": "Basic Concepts",
                "description": "Understand the fundamentals.",
                "subtopics": ["Concept A", "Concept B"]
            }}
        ]
    }}
    Ensure there are at least 5 detailed steps.
    """
    
    try:
        response = model.generate_content(prompt)
        text_resp = response.text.strip().replace("```json", "").replace("```", "")
        roadmap_json = json.loads(text_resp)
        
        # Save to MongoDB
        if db is not None:
            result = await db.roadmaps.insert_one(roadmap_json)
            roadmap_json["_id"] = str(result.inserted_id)
        
        return roadmap_json
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Generation Failed: {str(e)}")

@app.get("/api/progress/{user_id}/{topic}")
async def get_progress(user_id: str, topic: str):
    """Fetches user progress for a specific roadmap."""
    if db is None:
        return {"completed_steps": []}
        
    progress = await db.user_progress.find_one({"userId": user_id, "topic": topic.lower()})
    if not progress:
        return {"completed_steps": []}
    return {"completed_steps": progress.get("completed_steps", [])}

@app.post("/api/progress")
async def update_progress(req: ProgressUpdate):
    """Updates the checkbox state when a user completes a step."""
    if db is None:
        return {"status": "mock_success_no_db"}
        
    progress = await db.user_progress.find_one({"userId": req.userId, "topic": req.topic.lower()})
    
    if not progress:
        completed_steps = [req.stepId] if req.completed else []
        await db.user_progress.insert_one({
            "userId": req.userId, 
            "topic": req.topic.lower(), 
            "completed_steps": completed_steps
        })
    else:
        completed_steps = set(progress.get("completed_steps", []))
        if req.completed:
            completed_steps.add(req.stepId)
        else:
            completed_steps.discard(req.stepId)
            
        await db.user_progress.update_one(
            {"userId": req.userId, "topic": req.topic.lower()},
            {"$set": {"completed_steps": list(completed_steps)}}
        )
    
    return {"status": "success"}

# New endpoint for AI‑generated topic content (HTML)
@app.get("/api/content/{topic}")
async def get_topic_content(topic: str):
    """Returns premium HTML content for a given AI topic, with optional MongoDB caching."""
    # Attempt to serve cached content
    if db is not None:
        cached = await db.topic_contents.find_one({"topic": topic.lower()})
        if cached:
            return {"html": cached["html"]}
    # Fallback mock if Gemini not configured
    if model is None:
        mock_html = f"<section style='padding:2rem; text-align:center;'><h2>{topic} – AI Overview</h2><p>This is placeholder content. Replace with real Gemini‑generated HTML.</p></section>"
        return {"html": mock_html}
    # Prompt Gemini for rich HTML snippet
    prompt = f"""
    Produce a premium‑styled HTML snippet (no <html>/<body> tags) that explains the AI topic '{topic}'.
    Include a heading, a short paragraph, and a bullet list of 3‑5 key points.
    Use modern design cues: gradient background, glass‑morphism panels, subtle micro‑animations.
    Return ONLY the raw HTML string.
    """
    try:
        response = model.generate_content(prompt)
        html = response.text.strip()
        # Cache the generated HTML
        if db is not None:
            await db.topic_contents.insert_one({"topic": topic.lower(), "html": html, "generated_at": datetime.utcnow()})
        return {"html": html}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Content generation failed: {str(e)}")
