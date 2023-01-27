import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main-content">
        <div className="footer-social-media">
          <div className="tello-logo">
            <img src="images/footer/Artboard 19@2x.svg" alt="tello-logo" className="footer-logo" />
            <h3 className="company-name">Tello</h3>
          </div>
          <div className="socials">
            <a href="instagram.com" target='_blank'>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="facebook.com" target='_blank'>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="youtube.com" target='_blank'>
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
            <a href="twitter.com" target='_blank'>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
        </div>
        <div className="footer-menu">
          <h3 className="title">Menu</h3>
          <ul className="options">
            <li className="option">
              <Link to="/">Yeni</Link>
            </li>
            <li className="option">
              <Link to="/">Endirimlər</Link>
            </li>
            <li className="option">
              <Link to="/">Aksessuarlar</Link>
            </li>
            <li className="option">
              <Link to="/">Bütün brendlər</Link>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <h3 className="title">Kömək</h3>
          <ul className="options">
            <li className="option">
              <Link to="/">Tez -tez soruşulan suallar</Link>
            </li>
            <li className="option">
              <Link to="/">Çatdırılma xidməti</Link>
            </li>
            <li className="option">
              <Link to="/">Geri qaytarılma şərtləri</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contacts">
          <h3 className="title">Əlaqə</h3>
          <ul className="options">
            <li className="option adress">
              <Link to="/">
                <FontAwesomeIcon icon="location-dot" /> M. K. Ataturk avenue 89, Baku, Azerbaijan
              </Link>
            </li>
            <li className="option">
              <Link to="/">
                <FontAwesomeIcon icon="envelope" /> example@gmail.com
              </Link>
            </li>
            <li className="option">
              <Link to="/">
                <FontAwesomeIcon icon="phone" />
                *2108
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-rights">
        <div className="rights">
          <FontAwesomeIcon icon="copyright" />
          Tello 2022. Bütün hüquqlar qorunur.
        </div>
        <div className="line"></div>
        <div className="rules">
          <Link to="/">Qaydalar və şərtlər</Link>
          <Link to="/">Məxfilik siyasəti</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
