import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoadmapViewer from '../components/RoadmapViewer';
import '../styles/topicContent.css';

const TopicContent = () => {
  const { topicName } = useParams();
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const resp = await fetch(`${process.env.REACT_APP_BACKEND_URL || ''}/api/content/${encodeURIComponent(topicName)}`);
        const data = await resp.json();
        setHtml(data.html);
      } catch (e) {
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [topicName]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="topic-content-page" style={{ padding: '2rem' }}>
      <div className="generated-html" dangerouslySetInnerHTML={{ __html: html }} />
      <hr style={{ margin: '2rem 0' }} />
      <RoadmapViewer topic={topicName} />
    </div>
  );
};

export default TopicContent;
