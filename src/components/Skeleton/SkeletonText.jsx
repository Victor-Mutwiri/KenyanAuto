import './Skeleton.css';
import PropTypes from 'prop-types';

const SkeletonText = ({ lines = 1 }) => {
  return (
    <div className="skeleton-text">
      {Array.from({ length: lines }, (_, index) => (
        <div key={index} className="skeleton-line"></div>
      ))}
    </div>
  );
};

SkeletonText.propTypes = {
    lines: PropTypes.number,
  };
  

export default SkeletonText;
