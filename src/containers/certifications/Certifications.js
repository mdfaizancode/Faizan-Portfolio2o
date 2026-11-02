import React, { useState, useEffect } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";

function Certifications(props) {
  const theme = props.theme;
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, i) => (
          <Fade
            bottom
            duration={1000 + i * 250}
            distance="20px"
            key={cert.title}
          >
            <div
              className="cert-gallery-card"
              style={{
                "--cert-color": cert.color_code,
                backgroundColor: theme.body,
              }}
              onClick={() => setActive(cert)}
            >
              <div className="cert-img-wrap">
                <img
                  src={require(`../../assests/images/${cert.image_path}`)}
                  alt={cert.title}
                />
                <div className="cert-img-overlay">
                  <span className="cert-view-text">View Certificate</span>
                </div>
              </div>
              <div className="cert-caption">
                <h2 style={{ color: theme.text }}>{cert.title}</h2>
                <h3 style={{ color: theme.secondaryText }}>{cert.subtitle}</h3>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      {active && (
        <div className="cert-lightbox" onClick={() => setActive(null)}>
          <button
            className="cert-lightbox-close"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            &times;
          </button>
          <div
            className="cert-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={require(`../../assests/images/${active.image_path}`)}
              alt={active.title}
            />
            <h2 className="cert-lightbox-title">{active.title}</h2>
            <h3 className="cert-lightbox-subtitle">{active.subtitle}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;
