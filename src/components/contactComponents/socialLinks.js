// src/components/contactComponents/socialLinks.js

import React from "react";
import '../../styles/Contact.scss';

class SocialLinks extends React.Component {
  render() {
    return (
      <div className="social-links-container">
        <div className="social-info">
          <h2>Stay up to date with us</h2>
          <div className="social-list">
            <div className="social-item">
              <div className="social-icon instagram-icon">O</div>
              <div className="social-text">
                <span className="social-platform">instagram</span>
                <span className="social-handle">@trenducsd</span>
              </div>
            </div>
            <div className="social-item">
              <div className="social-icon facebook-icon">f</div>
              <div className="social-text">
                <span className="social-platform">facebook</span>
                <span className="social-handle">/trenducsd</span>
              </div>
            </div>
            <div className="social-item">
              <div className="social-icon medium-icon">M</div>
              <div className="social-text">
                <span className="social-platform">medium</span>
                <span className="social-handle">@trenducsd</span>
              </div>
            </div>
          </div>
        </div>
        <div className="social-placeholders">
          <div className="placeholder-box"></div>
          <div className="placeholder-box"></div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
