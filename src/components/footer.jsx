import React from "react";
import "../index.css";
import email from "../images/email.png";
const Footer = () => {
  return (
    <div className="contact-us-container container">
      <h3 style={{ margin: "revert" }}>Contact Us</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          className="contact-box set-ancer"
          href="mailto:2021cs118@student.uet.edu.pk"
        >
          <div className="rounded-circle">
            <img style={{ width: "2rem" }} src={email} alt="..." />
          </div>
          <h4>Email</h4>
          <p className="setEmail">2021cs118@student.uet.edu.pk</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
