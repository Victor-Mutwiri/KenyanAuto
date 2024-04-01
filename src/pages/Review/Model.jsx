// Model.jsx
import PropTypes from 'prop-types';
import './Model.css';

const Model = ({ selectedReview, onClose }) => {
  if (!selectedReview) {
    return null;
  }

  const { attributes } = selectedReview;
  const { ExteriorShot, InteriorShot } = attributes;

  return (
    <div className="models">
      
      <h2>{attributes.Vehicle} {attributes.Generation} Review</h2>
      <div className='selected-review'>
        {ExteriorShot && (
          <div>
            <h4>Exterior Shot</h4>
            <img src={ExteriorShot.data.formats.small.url} alt={ExteriorShot.data.alternativeText} />
          </div>
        )}
        {attributes.Overview && <h4>Overview</h4>}
        {attributes.Overview && <p>{attributes.Overview}</p>}
        {InteriorShot && (
          <div>
            <h4>Interior Shot</h4>
            <img src={InteriorShot.data.formats.small.url} alt={InteriorShot.data.alternativeText} />
          </div>
        )}
        {attributes.Interior && <h4>Interior</h4>}
        {attributes.Interior && <p className='bg'>{attributes.Interior}</p>}
        {attributes.Performance && <h4>Performance</h4>}
        {attributes.Performance && <p>{attributes.Performance}</p>}
        {attributes.Reliability && <h4>Reliability and Common Issues</h4>}
        {attributes.Reliability && <p className='bg'>{attributes.Reliability}</p>}
        {/* {attributes.Issues && <h4>Issues</h4>}
        {attributes.Issues && <p>{attributes.Issues}</p>} */}
        {attributes.Technology !== null && <h4>Technology</h4>}
        {attributes.Technology !== null && <p className='bg'>{attributes.Technology}</p>}
        {attributes.Value !== null && <h4>Value</h4>}
        {attributes.Value !== null && <p>{attributes.Value}</p>}
        {attributes.Comparison !== null && <h4>Comparison</h4>}
        {attributes.Comparison !== null && <p className='bg'>{attributes.Comparison}</p>}
        {attributes.Recommendation !== null && <h4>Recommendation</h4>}
        {attributes.Recommendation !== null && <p>{attributes.Recommendation}</p>}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

Model.propTypes = {
  selectedReview: PropTypes.shape({
    attributes: PropTypes.shape({
      Generation:PropTypes.string,
      Interior:PropTypes.string,
      Vehicle: PropTypes.string.isRequired,
      Overview: PropTypes.string,
      Performance: PropTypes.string,
      Reliability: PropTypes.string,
      Issues:PropTypes.string,
      Technology: PropTypes.string, // New prop type for Technology field
      Value: PropTypes.string, // New prop type for Value field
      Comparison: PropTypes.string, // New prop type for Comparison field
      Recommendation: PropTypes.string, // New prop type for Recommendation field
      ExteriorShot: PropTypes.shape({
        data: PropTypes.shape({
          formats: PropTypes.shape({
            small: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          alternativeText: PropTypes.string,
        }).isRequired,
      }),
      InteriorShot: PropTypes.shape({
        data: PropTypes.shape({
          formats: PropTypes.shape({
            small: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
          alternativeText: PropTypes.string,
        }).isRequired,
      }),
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Model;