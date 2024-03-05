import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MenuPage.css'

export const MenuPage = ({ isOpen, onClose }) => {
    const handleButtonClick = () => {
        onClose(); // Call onClose when the close button is clicked
      };
  return (
    <div className={`menu-page ${isOpen ? 'open' : ''}`}>
        <i className='bx bx-x close-button' onClick={handleButtonClick}></i>
        <div className="navigation">
            <Link to={'/buying'}>Buying</Link>
            <Link to={'/selling'}>Selling</Link>
            <Link to={'/maintenance'}>Maintenance</Link>
            <Link to={'/guides'}>Guides</Link>
        </div>
        <div className="socials">
            <a href="#"><i className='bx bxl-facebook'/></a>
            <a href="#"><i className='bx bxl-instagram'/></a>
            <a href="#"><i className='bx bxl-twitter'/></a>
        </div>
    </div>
  )
}

MenuPage.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
