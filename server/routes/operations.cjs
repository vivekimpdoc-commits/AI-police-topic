const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET Active Incidents (Operations Dashboard)
router.get('/incidents', async (req, res) => {
  try {
    const incidents = await prisma.incident.findMany({
      where: { status: { not: 'CLOSED' } },
      orderBy: { createdAt: 'desc' }
    });
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch active incidents' });
  }
});

// POST Create Incident
router.post('/incidents', async (req, res) => {
  const { incidentNumber, title, description, severity } = req.body;
  try {
    const newIncident = await prisma.incident.create({
      data: { incidentNumber, title, description, severity }
    });
    res.status(201).json(newIncident);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create incident' });
  }
});

// GET CMDB Assets
router.get('/cmdb', async (req, res) => {
  try {
    const assets = await prisma.cMDB.findMany();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch CMDB records' });
  }
});

module.exports = router;
