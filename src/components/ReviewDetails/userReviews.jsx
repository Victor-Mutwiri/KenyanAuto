import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserReviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/reviews/${id}`);
        if (response.data && response.data.data && response.data.data.length > 0) {
          // Assuming the response contains an array of reviews, we'll take the first one
          setReview(response.data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching review details:', error);
      }
    };

    fetchReviewDetails();
  }, [id]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{review.attributes.Vehicle}</h2>
      <h4>{review.attributes.Generation}</h4>
      <p>{review.attributes.Overview}</p>
      <p>{review.attributes.Performance}</p>
      <p>{review.attributes.Safety}</p>
      <p>{review.attributes.Ownership}</p>
      {/* Display other review details as needed */}
    </div>
  );
};

export default UserReviews;
