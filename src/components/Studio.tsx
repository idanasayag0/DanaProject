import React from 'react';
import './Studio.css';

interface EquipmentItemProps {
  name: string;
  description: string;
  imageUrl: string;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ name, description, imageUrl }) => (
  <div className="equipment-item">
    <div className="equipment-image">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="equipment-content">
      <h4 className="equipment-name">{name}</h4>
      <p className="equipment-description">{description}</p>
    </div>
  </div>
);

const Studio: React.FC = () => {
  const equipmentItems: EquipmentItemProps[] = [
    {
      name: 'קאדילק טיפולית',
      description: 'שיפור גמישות, יציבה ושיקום',
      imageUrl: '/images/pilatis9.jpg'
    },
    {
      name: 'רפורמר',
      description: 'חיזוק שרירי הליבה ויציבה מיטבית',
      imageUrl: '/images/firstPilatis.jpg'
    },
    {
      name: 'וונדה צ\'ייר',
      description: 'שיפור שיווי המשקל ותנועתיות',
      imageUrl: '/images/pilatis8.jpg'
    },
    {
      name: 'בארל',
      description: 'שיפור תנועה, איזון וגמישות',
      imageUrl: '/images/pilatis7.jpg'
    }
  ];

  return (
    <section id="studio" className="studio section">
      <div className="container">
        <h2 className="section-title">הסטודיו שלי</h2>
        <h3 className="section-subtitle">סביבה אינטימית ומקצועית</h3>
        
        <div className="studio-intro">
          <div className="studio-image">
            <img src="/images/Studio.jpg" alt="הסטודיו" />
          </div>
          <div className="studio-text">
            <p>
              בסטודיו שלי מחכה לך אווירה שקטה ונעימה, יחס אישי, התאמה מדויקת למצבך הפיזי 
              ושימוש במגוון מכשירים מתקדמים:
            </p>
          </div>
        </div>
        
        <div className="equipment-grid">
          {equipmentItems.map((item, index) => (
            <EquipmentItem 
              key={index}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;