import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import useState hook
import './MenuPage.css';
import logo from '../../assets/kenyanauto-transparent-logo.png';

export const MenuPage = ({ onClose }) => { // Remove isOpen from props
    const [isOpen, setIsOpen] = useState(false); // Manage isOpen state internally

    const handleButtonClick = () => {
        setIsOpen(!isOpen); // Toggle isOpen state
        console.log('MenuPage opened');
    };
    useEffect(() => {
        if (isOpen) {
            console.log('Menu page is opened');
        } else {
            console.log('Menu page is closed');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.menu-page')) {
                onClose(); // Close the menu if clicked outside of it
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, onClose]); // Include isOpen and onClose in the dependency array

    return (
        <div className={`menu-page ${isOpen ? 'open' : ''}`}>
            <i className='bx bx-x close-button' onClick={handleButtonClick}></i>
            <div className="logo">
                <Link to={'/'}>
                    <img src={logo} alt="KenyanAuto" className="side-logo" width={120}/>
                </Link>
            </div>
            <div className="navigation">
                <Link to={'/Buying'}>Buying</Link>
                <Link to={'/Selling'}>Selling</Link>
                <Link to={'/Maintenance'}>Maintenance</Link>
                <Link to={'/Guide'}>Guides</Link>
                <Link to={'/Safety'}>Safety</Link>
            </div>
            <div className="socials">
                <a href="#"><i className='bx bxl-facebook'/></a>
                <a href="#"><i className='bx bxl-instagram'/></a>
                <a href="#"><i className='bx bxl-twitter'/></a>
            </div>
        </div>
    );
}

MenuPage.propTypes = {
    onClose: PropTypes.func.isRequired,
};
