
import React from 'react';
import './HomeVisit.css';

const HomeVisit: React.FC = () => {
  return (
    <section id="home-visit" className="home-visit section">
      <div className="container">
        <div className="home-visit-content">
          <div className="home-visit-image">
            <img src="/api/placeholder/400/500" alt="פילאטיס מזרן בבית הלקוח" />
          </div>
          <div className="home-visit-text">
            <h3 className="section-subtitle">פילאטיס מזרן בבית הלקוח</h3>
            <ul className="home-visit-list">
              <li>
                <span className="check-icon">✔</span>
                אימון אישי, מותאם למי שמעדיף להתאמן בסביבה הביתית שלו
              </li>
              <li>
                <span className="check-icon">✔</span>
                מתאים לשיקום, למניעת כאבים ולשיפור היציבה
              </li>
            </ul>
            <div className="home-visit-image-small">
              <img src="/api/placeholder/300/400" alt="אימון פילאטיס ביתי" />
            </div>
            <div className="home-visit-cta">
              <p>מעוניינים באימון מותאם אישית בנוחות ביתכם?</p>
              <a href="#contact" className="btn">צרו קשר היום</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVisit;