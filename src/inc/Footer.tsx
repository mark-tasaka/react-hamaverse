import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './css/Footer.css';
import logo from './img/logo.png';

const FooterNavLinks: React.FC = () => (
  <ul className="footer-nav-list">
    <li>
      <NavLink to="/" end
        className={({ isActive }) => isActive ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
      >Home</NavLink>
    </li>
    <li>
      <NavLink to="/character-bios"
        className={({ isActive }) => isActive ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
      >Character Bios</NavLink>
    </li>
    <li>
      <NavLink to="/comic-issues"
        className={({ isActive }) => isActive ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
      >Comic Issues</NavLink>
    </li>
    <li>
      <NavLink to="/resources"
        className={({ isActive }) => isActive ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
      >Resources</NavLink>
    </li>
    <li>
      <NavLink to="/tribute"
        className={({ isActive }) => isActive ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
      >Tribute</NavLink>
    </li>
    <li>
      <NavLink to="/contact"
        className={({ isActive }) => isActive ? 'footer-nav-link footer-nav-link--active' : 'footer-nav-link'}
      >Contact</NavLink>
    </li>
  </ul>
);

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Hamaverse - Unofficial ARAH Comic Fan Site" />
          </Link>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <FooterNavLinks />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;