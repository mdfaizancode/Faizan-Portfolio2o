import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

const navLinks = [
  { className: "homei", label: "Home", target: "#home" },
  {
    className: "ec",
    label: "Education and Certifications",
    target: "#education",
  },
  { className: "projects", label: "Projects", target: "#projects" },
  { className: "cr", label: "Contact and Resume", target: "#contact" },
];

function Header(props) {
  const theme = props.theme;
  const stickyRef = useRef(null);

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${theme.name === "light" ? "#F7D774" : "#646464"}`,
    },
  });

  // Anchored sections have to clear the sticky bar, whose height changes with
  // viewport width, so publish the real bar height for CSS to use.
  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return undefined;

    const publish = () => {
      const box = el.querySelector(".menu-btn");
      // While the mobile menu is expanded the bar is temporarily tall; the
      // collapsed height is the offset the anchors need.
      if (box && box.checked) return;
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight + 14}px`
      );
    };

    publish();
    const observer =
      typeof ResizeObserver === "function" ? new ResizeObserver(publish) : null;
    if (observer) observer.observe(el);
    window.addEventListener("resize", publish);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, []);

  function changeTheme() {
    const next = theme.name === "light" ? "dark" : "light";
    props.setTheme(next);
    localStorage.setItem("theme", next);
  }

  function closeMenu() {
    const box = document.getElementById("menu-btn");
    if (box) box.checked = false;
  }

  const icon =
    theme.name === "dark" ? (
      <HiMoon strokeWidth={1} size={20} color="#A7A7A7" />
    ) : (
      <CgSun strokeWidth={1} size={20} color="#F9D784" />
    );

  return (
    <div
      className="header-sticky"
      ref={stickyRef}
      style={{ backgroundColor: theme.body }}
    >
      <Fade top duration={1000} distance="20px">
        <header className="header">
          <a href="#top" className="logo" onClick={closeMenu}>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
              <span style={{ color: theme.accentColor }}>
                {" "}
                <i className="fab fa-studiovinari"></i>
              </span>
            </span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            {navLinks.map((nav) => (
              <li key={nav.className}>
                <a
                  className={nav.className}
                  href={nav.target}
                  onClick={closeMenu}
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  {nav.label}
                </a>
              </li>
            ))}
            <li key="theme-toggle">
              <button
                {...styles}
                onClick={changeTheme}
                aria-label="Toggle theme"
              >
                {icon}
              </button>
            </li>
          </ul>
        </header>
      </Fade>
    </div>
  );
}

export default Header;
