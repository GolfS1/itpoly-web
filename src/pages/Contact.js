import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <div className="contact">
      <h2>ติดต่อเรา</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">ชื่อ:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />

        <label htmlFor="email">อีเมล:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />

        <label htmlFor="message">ข้อความ:</label>
        <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>

        <button type="submit">ส่งข้อความ</button>
      </form>

      <div className="contact-info">
        <p>เบอร์โทรศัพท์: 123-456-789</p>
        <p>อีเมล: info@lannapolytech.ac.th</p>
      </div>

      <div className="map">
        <h3>แผนที่</h3>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
