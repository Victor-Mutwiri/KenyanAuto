import { useState } from 'react';
import { MenuPage } from '../menupage/MenuPage';
import './Menuicon.css';

export const Menuicon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Toggle menu clicked');
        setIsOpen(prevIsOpen => !prevIsOpen); // Use functional form of setState
        console.log('IsOpen state after toggle:', isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <i className='bx bx-menu-alt-right' onClick={toggleMenu} />
            {isOpen && <MenuPage onClose={closeMenu} />}
        </>
    );
};
