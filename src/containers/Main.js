import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/ContactComponent";

export default function Main(props) {
  return (
    <div id="top">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Home theme={props.theme} />
      <Education theme={props.theme} />
      <Projects theme={props.theme} />
      <Contact theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}
