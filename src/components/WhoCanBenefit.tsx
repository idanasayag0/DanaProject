import React from 'react';
import './WhoCanBenefit.css';

const WhoCanBenefit: React.FC = () => {
  const benefitItems = [
    "שיקום אחרי ניתוחים (ברך, ירך, גב ועוד)",
    "כאבים כרוניים (גב, צוואר, אגן)",
    "מחלות אוטואימוניות כרוניות",
    "בעיות יציבה, שיווי משקל, טווחי תנועה",
    "ספורטאים אחרי פציעות או עומס יתר",
    "נשים בהריון ולאחר לידה",
    "שיפור איכות החיים",
    "עקמת",
    "בעיות נוירולוגיות",
    "פיברומיאלגיה",
    "בלט דיסק",
    "פריצות דיסק",
    "פציעות מאמץ חוזרות",
    "פרקינסון"
  ];

  return (
    <section id="who-benefits" className="who-benefits section">
      <div className="container">
        <h2 className="section-title">למי מתאים הפילאטיס השיקומי?</h2>
        
        <div className="benefits-content">
          <div className="benefits-list">
            <div className="benefits-grid">
              {benefitItems.map((item, index) => (
                <div className="benefit-item" key={index}>
                  <span className="check-icon">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits-images">
            <div className="benefits-image-main">
              <img src="/images/ICON-removebg-preview.png" alt="פילאטיס שיקומי" />
            </div>
          </div>
        </div>
        
        <div className="benefits-quote">
          <p>
            אני מאמינה שכל אדם יכול להרגיש טוב יותר ולחיות חיים בריאים ומאוזנים יותר — 
            ואני כאן כדי ללוות אותך בדרך לשם.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoCanBenefit;