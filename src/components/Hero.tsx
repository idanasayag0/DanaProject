
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">סטודיו ביתי פילאטיס שיקומי אישי</h1>
          <p className="hero-subtitle">
            חיזוק, שיקום ושיפור היציבה בהתאמה אישית
          </p>
          <p className="hero-description">
            התאוששות מניתוח, פציעה, כאבים כרוניים או פשוט ברצון לשפר את איכות החיים - אני כאן כדי ללוות אותך בתהליך
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">לקביעת שיעור ניסיון</a>
            <a href="#services" className="btn btn-secondary">לשירותים שלנו</a>
          </div>
        </div>
        <div className="hero-image">
        <img src="/images/ICON-removebg-preview.png" alt="פילאטיס שיקומי" />
        </div>
      </div>
    </section>
  );
};

export default Hero;