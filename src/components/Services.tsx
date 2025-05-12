import React from 'react';
import './Services.css';

interface ServiceItemProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, imageUrl }) => (
  <div className="service-item">
    <div className="service-image">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="service-content">
      <h3 className="service-title">{title}</h3>
      <div className="service-description">{description}</div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const rehabilitationItems = [
    "התאמה אישית לכל מתאמן בהתאם למצבו הפיזי",
    "חיזוק השרירים העמוקים, שיפור היציבה ושיווי המשקל",
    "שיפור טווחי התנועה ושיקום לאחר ניתוחים או פציעות",
    "שילוב נשימה ותנועה להעצמת האפקטיביות של האימון",
    "הדרכה אישית ומדויקת למניעת פציעות ולמקסום התוצאות",
    "פילאטיס לגיל השלישי בהתאם לצרכים הפיזיים והבריאותיים"
  ];

  const images = [
    "/images/kosotRoah.jpg", "/images/avanimHamot.jpg", "/images/minzoType.jpg"
  ]

  const complementaryItems = [
    <><strong>כוסות רוח</strong> — משחרר מתחים, משפר את זרימת הדם, מקל משמעותית על דלקות, כאבי גב, צוואר, כתפיים ושרירים</>,
    <><strong>אבנים חמות</strong> — משפר את מחזור הדם, מפחית מתח ומסייע להרפיית שרירים כואבים. טיפול זה מעניק תחושת רגיעה עמוקה ושיפור במצב הרוח הכללי</>,
    <><strong>קינזיו טייפ</strong> — סרט טיפולי נמתח ואלסטי המשמש להקלה בכאבי שרירים ומפרקים. עוזר להפחית כאב, מספק תמיכה לשרירים ולמפרקים, משפר משמעותית את טווחי התנועה</>
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">השירותים שלי</h2>
        
        <div className="service-category">
          <h3 className="section-subtitle">פילאטיס שיקומי אישי</h3>
          <div className="service-rehabilitation">
            <div className="service-rehabilitation-image">
              <img src="/images/shikomiPilatis.jpg" style={{height: "500px"}} alt="פילאטיס שיקומי" />
            </div>
            <div className="service-rehabilitation-list">
              <ul>
                {rehabilitationItems.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="service-gallery">
          <img src="/images/pilatis8.jpg" alt="פילאטיס תרגיל 1" />
          <img src="/images/pilatis9.jpg" alt="פילאטיס תרגיל 2" />
          <img src="/images/ThirdPilatis.jpg" alt="פילאטיס תרגיל 3" />
          <img src="/images/pilatis6.jpg" alt="פילאטיס תרגיל 4" />
        </div>
        
        <div className="service-category">
          <h3 className="section-subtitle">טיפולים משלימים בסטודיו</h3>
          <div className="complementary-services">
            {complementaryItems.map((item, index) => (
              <div className="complementary-service" key={index}>
                <div className="complementary-image">
                  <img style={{height: "300px"}} src={images[index]} alt={`טיפול משלים ${index + 1}`} />
                </div>
                <p className="complementary-description">✔ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;