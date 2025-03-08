import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" width={200} height={200}/>
          <p>
          Welcome to Narthanasala, your go-to destination for quality products and exceptional service. 
          We believe in customer satisfaction and strive to provide the best experience for our users.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/Narthanasala" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width={40} />
            </a>
            <a href="https://twitter.com/_Narthanasala" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="X" width={40} />
            </a>
            <a href="https://www.instagram.com/_narthanasala" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width={40} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>📞 6302374473</li>
            <li>✉️ contact@Narthanasala.com</li>
            <li>📍 3rd Floor, SSS Square Kothaguda, X Road, opp. AMB Cinemas, Laxmi Cyber City, Whitefields, Kondapur, Hyderabad, Telangana 500081</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Narthanasala.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;