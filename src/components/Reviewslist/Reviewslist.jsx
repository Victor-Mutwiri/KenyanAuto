import PropTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
  return (
    <section className='car'>
      {reviews.map((review) => (
        <div key={review.id} className='car-review'>
          <div className="car-image">
            {/* Adjust this part according to your review data */}
          </div>
          <div className='desc'>
            <h3>{review.attributes.Vehicle}</h3>
            <h4>{review.attributes.Generation}</h4>
            {/* Add more review attributes here */}
          </div>
        </div>
      ))}
    </section>
  )
}


// Prop types validation
ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired,
  };

export default ReviewList;
