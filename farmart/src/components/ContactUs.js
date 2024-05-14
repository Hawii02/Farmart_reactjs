import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us. Our dedicated team is here to assist you.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@farmart.co.ke</p>
          <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
          <p><strong>Address:</strong> [Physical Address], Nairobi, Kenya</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Connect with Us on Social Media</h2>
        <p>Follow us on social media to stay updated with the latest news, offers, and events:</p>
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/farmartke">facebook.com/farmartke</a></li>
          <li>Twitter: <a href="https://twitter.com/farmartke">twitter.com/farmartke</a></li>
          <li>Instagram: <a href="https://www.instagram.com/farmartke">instagram.com/farmartke</a></li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <p>Alternatively, you can use the form below to send us a message:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;