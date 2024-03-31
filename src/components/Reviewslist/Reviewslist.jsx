// Reviewslist.jsx
import PropTypes from 'prop-types';
import './Reviewslist.css';

const ReviewList = ({ reviews, onSelectReview }) => {
  return (
    <section className='car'>
      {reviews.map((review) => (
        <div key={review.id} className='car-review'>
          <div
            key={review.id}
            className='car-review-link'
            onClick={() => onSelectReview(review)}
            style={{ cursor: 'pointer' }} // Add cursor style to indicate clickable
          >
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
        </div>
      ))}
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  onSelectReview: PropTypes.func.isRequired,
};

export default ReviewList;
