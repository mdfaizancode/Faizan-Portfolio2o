import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

function Home(props) {
  return (
    <div id="home">
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
    </div>
  );
}

export default Home;
