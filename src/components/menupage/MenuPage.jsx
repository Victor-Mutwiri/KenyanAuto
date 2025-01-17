import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'; // Import useState hook
import './MenuPage.css';
import logo from '../../assets/kenyanauto-transparent-logo.png';

export const MenuPage = ({ isOpen, onClose }) => { // Remove isOpen from props
    const handleButtonClick = () => {
        onClose();
      };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.menu-page')) {
                onClose(); // Close the menu if clicked outside of it
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={`menu-page ${isOpen ? 'open' : ''}`}>
            <i className='bx bx-x close-button' onClick={handleButtonClick}/>
            <div className="logo">
                <Link to={'/'} onClick={handleButtonClick}>
                    <img src={logo} alt="KenyanAuto" className="side-logo" width={120}/>
                </Link>
            </div>
            <div className="navigation">
                <Link to={'/Buying'} onClick={handleButtonClick}>Buying</Link>
                <Link to={'/Makes'} onClick={handleButtonClick}>Makes</Link>
                {/* <Link to={'/Selling'} onClick={handleButtonClick}>Selling</Link>
                <Link to={'/Maintenance'} onClick={handleButtonClick}>Maintenance</Link> */}
                {/* <Link to={'/Marketplace'} onClick={handleButtonClick}>Marketplace</Link> */}
                {/* <Link to={'/Guide'} onClick={handleButtonClick}>Guides</Link> */}
                {/* <Link to={'/Safety'} onClick={handleButtonClick}>Safety</Link> */}
                <Link to={'/About'} onClick={handleButtonClick}>About</Link>
            </div>
            <div className="socials">
                <a href="https://www.facebook.com/kenyanauto/"><i className='bx bxl-facebook'/></a>
                <a href="https://x.com/KenyanAuto_"><i className='bx bxl-twitter'/></a>
            </div>
        </div>
    );
}

MenuPage.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};
