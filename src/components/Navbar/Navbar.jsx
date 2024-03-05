import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <a href="/" className="navbar-logo-link">
                    <img src="https://www.kenyanauto.co.ke/assets/images/logo.png" alt="KenyanAuto" className="navbar-logo-img" />
                </a>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-menu-list">
                    <li className="navbar-menu-item">
                        <a href="/" className="navbar-menu-link">Home</a>
                    </li>
                    <li className="navbar-menu-item">
                        <a href="/about" className="navbar-menu-link">About</a>
                    </li>
                    <li className="navbar-menu-item">
                        <a href="/services" className="navbar-menu-link">Services</a>
                    </li>
                    <li className="navbar-menu-item">
                        <a href="/contact" className="navbar-menu-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
