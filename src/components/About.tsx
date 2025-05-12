import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">אודותיי</h2>
        <div className="about-content">
          <div className="about-images">
            <div className="about-image-main">
              <img src="/images/Pilatis5.jpg" alt="דנה פגיס קרדי" />
            </div>
          </div>
          <div className="about-text">
            <p>
              שמי דנה פגיס קרדי, מדריכת פילאטיס שיקומי, רקדנית מגיל צעיר ואמא לארבעה. 
              משבר הקורונה גרם לי להבין עד כמה חיוני לשמור על הגוף לטווח ארוך, וכך מצאתי את דרכי לפילאטיס — 
              שיטה ששינתה את חיי.
            </p>
            <p>
              מאז, אני לומדת, חוקרת ומעמיקה את הידע שלי באנטומיה, שיקום פיזי ושיטות טיפול משלימות, 
              מתוך שליחות אמיתית לסייע לכל אדם לשפר את בריאותו, גופו ונפשו.
            </p>
            <div className="about-images-small">
              <img src="/images/secondPilatis.jpg" alt="דנה בפעולה" />
              <img src="/images/pilatis7.jpg" alt="דנה מלמדת" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;