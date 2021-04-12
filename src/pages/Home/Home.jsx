import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__title">
          <h1>
            Hello, I'm Dhruv
            <br />
            Nakum
          </h1>
        </div>
        <div className="home__subtitle">
          <p>Mobile and Web Developer from India.</p>
        </div>
        <div className="separator"></div>
        <div className="home__subtitle2">
          <p>See the projects below, or check out some</p>
        </div>
      </div>
      <div className="home__right"></div>
    </div>
  );
}

export default Home;
