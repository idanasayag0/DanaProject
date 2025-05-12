import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>סטודיו דנה</h1>
          <p>פילאטיס שיקומי</p>
        </div>

        <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>אודות</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>שירותים</a></li>
            <li><a href="#studio" onClick={() => setIsMenuOpen(false)}>הסטודיו</a></li>
            <li><a href="#who-benefits" onClick={() => setIsMenuOpen(false)}>למי מתאים</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>צור קשר</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;