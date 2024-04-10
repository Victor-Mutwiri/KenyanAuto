import { useState } from 'react';
import { MenuPage } from '../menupage/MenuPage';

import './Menuicon.css';

export const Menuicon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
        console.log("Menu opened")
    };
      const closeMenu = () => {
        setIsOpen(false);
        console.log("menu closed")
    };

    return (
        <>
            <i className="bx bx-menu-alt-right" onClick={ toggleMenu }/* onClick={toggleMenu} *//>
            {isOpen && <MenuPage onClose={closeMenu} isOpen={isOpen} />}
            {/* <MenuPage isOpen={isOpen} onClose={closeMenu} /> */}
        </>
    );
};

