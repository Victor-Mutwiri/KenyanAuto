// Model.jsx
import PropTypes from 'prop-types';
import './Model.css';

const Model = ({ selectedReview, onClose }) => {
  if (!selectedReview) {
    return null;
  }

  const { attributes } = selectedReview;

  return (
    <div className="model">
      <button onClick={onClose}>Close</button>
      <h2>Review Details</h2>
      <div className='selected-review'>
        <h3>{attributes.Vehicle}</h3>
        {attributes.Overview && <p>Overview: {attributes.Overview}</p>}
        {attributes.Performance && <p>Performance: {attributes.Performance}</p>}
        {attributes.Reliability && <p>Reliability: {attributes.Reliability}</p>}
      </div>
    </div>
  );
};

Model.propTypes = {
  selectedReview: PropTypes.shape({
    attributes: PropTypes.shape({
      Vehicle: PropTypes.string.isRequired,
      Overview: PropTypes.string,
      Performance: PropTypes.string,
      Reliability: PropTypes.string,
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Model;
