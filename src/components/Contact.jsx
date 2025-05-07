import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const contactLinks = [
    {
      id: 1,
      platform: "Email",
      link: "mailto:keshavraj9954@gmail.com",
      value: "keshavraj9954@gmail.com"
    },
    {
      id: 2,
      platform: "GitHub",
      link: "https://github.com/keshavr57",
      value: "github.com/keshavr57"
    },
    {
      id: 3,
      platform: "LinkedIn",
      link: "https://linkedin.com/in/keshavrajput",
      value: "linkedin.com/in/keshavrajput"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true
      });
      return;
    }
    
    // Form submission logic would go here in a real application
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setFormStatus({
      submitted: true,
      error: false
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false
      });
    }, 5000);
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <ul className="contact-links">
            {contactLinks.map((item) => (
              <li key={item.id} className="contact-item">
                <span className="contact-platform">{item.platform}:</span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="contact-form-container">
          <h3>Send me a message</h3>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.error 
                  ? 'Please fill out all fields.' 
                  : 'Message sent successfully!'}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;