import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/kenyanauto-black-transparent-logo.png'

const Footer = () => {
  return (
    <footer>
        <section className='footer'>
            <Link to={'/'}><img src={logo} alt="KenyanAuto" className="navbar-logo-img" width={200}/></Link>
            <div className='footer-links'>
                <div>
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/About'}>About US</Link></li>
                        <li><Link to={'/Buying'}>Buying</Link></li>
                        <li><Link to={'/Selling'}>Selling</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>+254746583509</li>
                        <li>mutwirilincoln19@gmail.com</li>
                        <li>Freedom Heights Mall, Langata Rd</li>
                    </ul>
                </div>
                <div className='opening'>
                    <h4>Opening Hours</h4>
                    <ul>
                        <li>Mon-Thur 9:00-17:00</li>
                        <li>Fri 8:00-16:00</li>
                        <li>Sat 9:00-13:00</li>
                    </ul>
                </div>
            </div>
        </section>
        <p>Copyright <span>&copy;</span> 2024</p>
        <div className='mediaIcons'>
            <a href="#"><i className='bx bxl-facebook'/></a>
            <a href="https://twitter.com/lincoln_mutwiri"><i className='bx bxl-twitter'/></a>
        </div>
    </footer>
  )
}

export default Footer