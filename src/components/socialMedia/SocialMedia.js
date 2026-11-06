import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia({ hideWhatsapp = false }) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github.trim() !== "" && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      )}
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      {!hideWhatsapp && socialMediaLinks.whatsapp && (
        <a
          href={socialMediaLinks.whatsapp}
          className="icon-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.gmail.trim() !== "" && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      )}
    </div>
  );
}
