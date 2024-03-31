import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Model.css';

const Model = () => {
  const { generation } = useParams(); // Get the generation parameter from the URL
  const [selectedReview, setSelectedReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        // Fetch reviews based on Generation
        const response = await axios.get(`http://localhost:1337/api/reviews?generation=${generation}&populate=*`);
        // Assuming the API returns an array of reviews, you can select the first one for simplicity
        setSelectedReview(response.data.data[0]); // Selecting the first review
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [generation]); // Fetch review whenever the generation parameter changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!selectedReview || !selectedReview.attributes) {
    return <div>No review found.</div>;
  }

  const { attributes } = selectedReview;

  return (
    <div className="model">
      <h2>Full Review</h2>
      <div className='selected-review'>
        {attributes.Vehicle && <h3>{attributes.Vehicle}</h3>}
        {attributes.Overview && <p>Overview: {attributes.Overview}</p>}
        {attributes.Performance && <p>Performance: {attributes.Performance}</p>}
        {attributes.Reliability && <p>Reliability: {attributes.Reliability}</p>}
      </div>
    </div>
  );
};

export default Model;
