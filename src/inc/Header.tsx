import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import './css/Header.css';
import logo from './img/logo.png';

interface NavLinksProps {
  onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick }) => (
  <ul className="nav-list">
    <li>
      <NavLink to="/" end
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Home</NavLink>
    </li>
    <li>
      <NavLink to="/character-bios"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Character Bios</NavLink>
    </li>
    <li>
      <NavLink to="/comic-issues"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Comic Issues</NavLink>
    </li>
    <li>
      <NavLink to="/resources"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Resources</NavLink>
    </li>
    <li>
      <NavLink to="/tribute"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Tribute</NavLink>
    </li>
    <li>
      <NavLink to="/contact"
        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
        onClick={onLinkClick}
      >Contact</NavLink>
    </li>
  </ul>
);

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuSource, setMenuSource] = useState<'main' | 'sticky' | null>(null);
  const fullHeaderRef = useRef<HTMLElement | null>(null);

  /* ── Sticky detection ── */
  useEffect(() => {
    const header = fullHeaderRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { root: null, rootMargin: '0px', threshold: 0 }
    );
    observer.observe(header);

    const checkSticky = (): void => {
      if (!header) return;
      const { bottom } = header.getBoundingClientRect();
      setIsSticky(bottom <= 0);
    };

    window.addEventListener('scroll', checkSticky, { passive: true });
    document.addEventListener('scroll', checkSticky, { passive: true, capture: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkSticky);
      document.removeEventListener('scroll', checkSticky, { capture: true });
    };
  }, []);

  /* ── Sync menu source when sticky state changes ── */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMenuSource(current => {
      if (!menuOpen) return current;
      if (isSticky && current === 'main') return 'sticky';
      if (!isSticky && current === 'sticky') return 'main';
      return current;
    });
  }, [isSticky]);

  /* ── Close menu on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = () => { setMenuOpen(false); setMenuSource(null); };
  const toggleMainMenu   = () => { setMenuOpen(prev => !prev); setMenuSource(s => s === 'main'   ? null : 'main'); };
  const toggleStickyMenu = () => { setMenuOpen(prev => !prev); setMenuSource(s => s === 'sticky' ? null : 'sticky'); };

  const handleLinkClick = () => {
    setTimeout(() => setMenuOpen(false), 50);
  };

  return (
    <>
      {/* ── Full header ── */}
      <header className="header" ref={fullHeaderRef}>
        <div className="header-container">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="Hamaverse - Unofficial ARAH Comic Fan Site" />
            </Link>
          </div>

          <nav className="header-nav header-nav--desktop" aria-label="Main navigation">
            <NavLinks />
          </nav>

          <button
            className={`hamburger${menuOpen && menuSource === 'main' ? ' hamburger--open' : ''}`}
            onClick={toggleMainMenu}
            aria-expanded={menuOpen && menuSource === 'main'}
            aria-label={menuOpen && menuSource === 'main' ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`mobile-menu${menuOpen && menuSource === 'main' ? ' mobile-menu--open' : ''}`}
          aria-hidden={!(menuOpen && menuSource === 'main')}
        >
          <nav className="header-nav" aria-label="Mobile navigation">
            <NavLinks onLinkClick={handleLinkClick} />
          </nav>
        </div>
      </header>

      {/* Mobile backdrop */}
      {ReactDOM.createPortal(
        <div
          className={`mobile-backdrop${menuOpen ? ' mobile-backdrop--visible' : ''}`}
          onClick={closeMenu}
          aria-hidden
        />,
        document.body
      )}

      {/* ── Sticky header ── */}
      {ReactDOM.createPortal(
        <header
          className={`header header--sticky${isSticky ? ' header--sticky-visible' : ''}`}
          aria-hidden={!isSticky}
        >
          <div className="header-container header-container--sticky">
            <div className="header-logo header-logo--sticky">
              <Link to="/">
                <img src={logo} alt="Hamaverse - Unofficial ARAH Comic Fan Site" />
              </Link>
            </div>

            <nav className="header-nav header-nav--desktop" aria-label="Main navigation">
              <NavLinks />
            </nav>

            <button
              className={`hamburger hamburger--sticky${menuOpen && menuSource === 'sticky' ? ' hamburger--open' : ''}`}
              onClick={toggleStickyMenu}
              aria-expanded={menuOpen && menuSource === 'sticky'}
              aria-label={menuOpen && menuSource === 'sticky' ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {isSticky && (
            <div
              className={`mobile-menu mobile-menu--sticky${menuOpen && menuSource === 'sticky' ? ' mobile-menu--open' : ''}`}
              aria-hidden={!(menuOpen && menuSource === 'sticky')}
            >
              <nav className="header-nav" aria-label="Mobile navigation">
                <NavLinks onLinkClick={handleLinkClick} />
              </nav>
            </div>
          )}
        </header>,
        document.body
      )}
    </>
  );
};

export default Header;