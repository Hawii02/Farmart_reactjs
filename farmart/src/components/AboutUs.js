import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Farmart</h1>
        <p>Welcome to Farmart, your premier online marketplace for buying and selling farm animals directly from sellers in Kenya.</p>
        <p>Founded in [year], Farmart was born out of a passion for agriculture and a desire to revolutionize the way farm animals are bought and sold in Kenya. With our user-friendly platform, we aim to connect farmers, livestock breeders, and buyers, creating a seamless and efficient marketplace for agricultural transactions.</p>
        <h2>Our Mission</h2>
        <p>At Farmart, our mission is to empower farmers and sellers by providing them with a reliable platform to showcase their livestock and connect with potential buyers. We strive to promote transparency, fairness, and efficiency in agricultural trade, ultimately contributing to the growth and prosperity of the farming community in Kenya.</p>
        <h2>What Sets Us Apart?</h2>
        <p>1. <strong>Direct from Sellers:</strong> We facilitate direct transactions between buyers and sellers, eliminating middlemen and ensuring fair prices for both parties.</p>
        <p>2. <strong>Wide Selection:</strong> Whether you're in search of dairy cows, poultry, goats, sheep, or pigs, Farmart offers a diverse selection of high-quality farm animals to meet your needs.</p>
        <p>3. <strong>Convenience:</strong> Our intuitive platform allows users to browse listings, communicate with sellers, and complete transactions with ease, all from the comfort of their home or farm.</p>
        <p>4. <strong>Trust & Security:</strong> We prioritize the safety and security of our users' data and transactions. Our platform employs robust security measures to protect against fraud and ensure a secure browsing and shopping experience.</p>
        <p>5. <strong>Support & Community:</strong> Our dedicated customer support team is committed to assisting users throughout their journey on Farmart. Additionally, we foster a vibrant community of farmers, sellers, and agriculture enthusiasts, where knowledge sharing and collaboration thrive.</p>
        <h2>Our Vision for the Future</h2>
        <p>Looking ahead, we envision Farmart becoming the go-to destination for all agricultural needs in Kenya. We aspire to expand our offerings to include a wider range of agricultural products and services, further enhancing the accessibility and efficiency of agricultural trade in the region.</p>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions, feedback, or inquiries? We'd love to hear from you!</p>
        <p>Email: support@farmart.co.ke</p>
        <p>Phone: +254 XXX XXX XXX</p>
        <p>Address: [Physical Address], Nairobi, Kenya</p>
        <p>Connect with us on social media:</p>
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/farmartke">facebook.com/farmartke</a></li>
          <li>Twitter: <a href="https://twitter.com/farmartke">twitter.com/farmartke</a></li>
          <li>Instagram: <a href="https://www.instagram.com/farmartke">instagram.com/farmartke</a></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;