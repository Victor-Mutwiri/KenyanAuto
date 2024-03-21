import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Reviewslist.css'

const ReviewList = ({ reviews }) => {
  return (
    <section className='car'>
      {reviews.map((review) => (
        <Link key={review.id} to={`/review-details/${review.id}`} className='car-review-link'>
          <div key={review.id} className='car-review'>
            <div className="car-image">
              {review.attributes.ExteriorShot && review.attributes.ExteriorShot.data && review.attributes.ExteriorShot.data.attributes.formats && review.attributes.ExteriorShot.data.attributes.formats.thumbnail && (
                <img src={review.attributes.ExteriorShot.data.attributes.formats.thumbnail.url} alt={review.attributes.Vehicle} />
              )}
            </div>
            <div className='desc'>
              <h3>{review.attributes.Vehicle}</h3>
              <h4>{review.attributes.Generation}</h4>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

// Prop types validation
ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;


/* import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Reviewslist.css';
import { useEffect, useState } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/reviews?populate=*');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className='car'>
      {reviews.map((review) => (
        <Link key={review.id} to={`/review-details/${review.id}`} className='car-review-link'>
          <div key={review.id} className='car-review'>
            <div className="car-image">
            {review.attributes.ExteriorShot && review.attributes.ExteriorShot.data && review.attributes.ExteriorShot.data.attributes.formats && review.attributes.ExteriorShot.data.attributes.formats.thumbnail && (
              <>
                <img src={review.attributes.ExteriorShot.data.attributes.formats.thumbnail.url} alt={review.attributes.Vehicle} />
                
                <a href={review.attributes.ExteriorShot.data.attributes.formats.thumbnail.url} target="_blank" rel="noopener noreferrer">View Image</a>
              </>
            )}
            </div>
            <div className='desc'>
              <h3>{review.attributes.Vehicle}</h3>
              <h4>{review.attributes.Generation}</h4>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};


ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList; */
