import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import nnLogo from "../assets/nn-logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

<Link
  to="/"
  className="navbar-logo"
  onClick={() => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  <img
    src={nnLogo}
    alt="Nizam Nazir"
    className="navbar-logo-image"
  />
</Link>

<ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>

<li>
  <Link
    to="/advisory"
    onClick={() => setMenuOpen(false)}
  >
    Advisory
  </Link>
</li>
<li>
  <Link
    to="/services"
    onClick={() => setMenuOpen(false)}
  >
    Services
  </Link>
</li>
<li>
  <Link to="/services" onClick={() => setMenuOpen(false)}>
    Services
  </Link>
</li>
  <li>
  <Link
    to="/articles"
    onClick={() => setMenuOpen(false)}
  >
    Articles
  </Link>
</li>

<li>
  <Link
    to="/recognition"
    onClick={() => setMenuOpen(false)}
  >
    Recognition
  </Link>
</li>

<li>
<Link
  to="/#contact"
  onClick={() => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  Contact
</Link>
</li>
</ul>

<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <FaBars />
</div>

    </nav>
  );
}

export default Navbar;