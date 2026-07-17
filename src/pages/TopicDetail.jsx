import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import RoadmapViewer from '../components/RoadmapViewer';

const TopicDetail = () => {
  const { topicName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format topic name from URL (e.g. predictive-policing -> Predictive Policing)
  const formattedTopic = topicName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div style={{ background: '#020617', minHeight: '100vh', color: '#fff', paddingTop: '80px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '8px', 
            background: 'transparent', border: 'none', 
            color: '#94a3b8', cursor: 'pointer', marginBottom: '2rem',
            fontSize: '0.9rem', transition: 'color 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#06b6d4'}
          onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
        >
          <ArrowLeft size={16} /> BACK TO DASHBOARD
        </button>

        {/* Roadmap Viewer Component */}
        <RoadmapViewer topic={formattedTopic} />

      </div>
    </div>
  );
};

export default TopicDetail;
