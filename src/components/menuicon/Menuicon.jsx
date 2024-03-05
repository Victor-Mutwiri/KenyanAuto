import {useState} from 'react'
import { MenuPage } from '../menupage/MenuPage';
import './Menuicon.css'

export const Menuicon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
      const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <>
        <i className='bx bx-menu-alt-right' onClick={toggleMenu}/>
        <MenuPage isOpen={isOpen} onClose={closeMenu} />
    </>
  )
}
