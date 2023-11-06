import { motion } from "framer-motion";
import React from "react";
import potrait from "../../assets/images/b&w.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <motion.div
        className="home__left"
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "tween",
          },
        }}
        initial={{
          opacity: 0,
          x: -100,
        }}
      >
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
        {/* Make a Download Resume button with 10px border radius and white background with black text */}
        <div className="header__links">
          <h4 style={{ backgroundColor:"white", color:"black" }}>Download Resume</h4>
        </div>
        <div className="separator"></div>
        <div className="home__subtitle2">
          <p>See the projects below, or check out some</p>
        </div>
      </motion.div>
      <motion.div
        className="home__right"
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            type: "tween",
          },
        }}
        initial={{
          opacity: 0,
        }}
      >
        <img src={potrait} alt="" />
      </motion.div>
    </div>
  );
}

export default Home;
