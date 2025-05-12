
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">סטודיו פילאטיס שיקומי - דנה פגיס קרדי</h3>
            <p className="footer-tagline">חיזוק, שיקום ושיפור היציבה בהתאמה אישית</p>
            
            <div className="footer-hours">
              <h4>שעות פעילות</h4>
              <p>פתוח בכל ימות השבוע לא כולל שבתות וחגים</p>
              <p>תיאום מראש - אימונים אישיים בלבד</p>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>יצירת קשר</h4>
            <div className="footer-contact-item">
              <span className="footer-icon">📍</span>
              <p>מושב שדה עוזיהו, הרימון 8</p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-icon">📞</span>
              <p><a href="tel:+972546781064">054-6781064</a></p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-icon">📩</span>
              <p><a href="mailto:Pilatisdana58@gmail.com">Pilatisdana58@gmail.com</a></p>
            </div>
            <div className="footer-accessibility">
              <p>✓ נגישות לנכים</p>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>ניווט מהיר</h4>
            <ul>
              <li><a href="#home">דף הבית</a></li>
              <li><a href="#about">אודות</a></li>
              <li><a href="#services">השירותים שלי</a></li>
              <li><a href="#studio">הסטודיו</a></li>
              <li><a href="#contact">צור קשר</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} סטודיו פילאטיס שיקומי - דנה פגיס קרדי. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;