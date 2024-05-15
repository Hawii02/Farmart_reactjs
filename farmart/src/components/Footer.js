
import React from 'react';
import './Footer.css'; 
    
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h3>About Farmart</h3>
        <p>Farmart is your trusted online marketplace for buying and selling farm animals directly from sellers in Kenya. We strive to empower farmers and promote transparency in agricultural trade.</p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: support@farmart.co.ke</p>
        <p>Phone: +254 XXX XXX XXX</p>
        <p>Address: [Physical Address], Nairobi, Kenya</p>
      </div>
      <div className="footer-social">
        <h3>Connect with Us</h3>
        <ul>
          <li><a href="https://www.facebook.com/farmartke">Facebook</a></li>
          <li><a href="https://twitter.com/farmartke">Twitter</a></li>
          <li><a href="https://www.instagram.com/farmartke">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Farmart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
