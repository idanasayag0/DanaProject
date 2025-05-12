import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      isValid = false;
    } else if (!/^0\d{8,9}$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendFormDataToEmail = async (data: FormData) => {
    try {
      const formData = {
        service_id: 'service_jjpe1va',
        template_id:'template_u8sddpk',
        user_id: '9kxmUM44lBPYy86Gd',
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message
      }

      const response = await emailjs.send(
        'service_jjpe1va',
        'template_u8sddpk',
        formData,
        '9kxmUM44lBPYy86Gd'
      );
      console.log('Email sent:', response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Something went wrong while sending your message.');
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      const emailSent = await sendFormDataToEmail(formData);
      
      setIsSubmitting(false);
      
      if (emailSent) {
        // Success handling
        console.log('Form data:', formData);
        setSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        
        // Reset submitted status after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">צרו קשר</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-details">
                <h3>מידע ליצירת קשר</h3>
                <p>הסטודיו פתוח בכל ימות השבוע לא כולל שבתות וחגים</p>
                <p>נגישות לנכים</p>
                <p>תיאום מראש - אימונים אישיים בלבד</p>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>מיקום הסטודיו:</strong>
                    <p>מושב שדה עוזיהו, הרימון 8</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>טלפון:</strong>
                    <p><a href="tel:+972546781064">054-6781064</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📩</span>
                  <div>
                    <strong>אימייל:</strong>
                    <p><a href="mailto:Pilatisdana58@gmail.com">Pilatisdana58@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>השאירו פרטים ואחזור אליכם</h3>
              
              {submitted && (
                <div className="form-success">
                  ההודעה נשלחה בהצלחה! אחזור אליכם בהקדם.
                </div>
              )}
              
              {submitError && (
                <div className="form-error">
                  {submitError}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">הודעה (אופציונלי)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-form" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'שולח...' : 'שליחה'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;