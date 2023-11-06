import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Connect.css";
function Connect() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="connect">
      <h1 data-aos="zoom-in">Connect</h1>
      <div data-aos="zoom-in" className="connect__seperator"></div>
      <div className="connect__details">
        <div data-aos="fade-right" className="connectDetails__1">
          <h1 id="name">DHRUV NAKUM</h1>
          <p id="profession">Mobile and Web Developer</p>
          <span id="residency">• India</span>
        </div>
        <div data-aos="fade-right" className="connectDetails__2">
          <p id="connectText">
            If you are thinking about hiring me or would like to discuss a
            project, get in touch with me at
          </p>
          <p id="email">nakumdhruv123@gmail.com</p>
        </div>
        <div className="connect__social">
          <a
            href="https://www.linkedin.com/in/dhruv-nakum-4b1054176/"
            target="_blank" rel="noreferrer"
          >
            LINKED IN
          </a>
          <p>/</p>

          <a href="https://twitter.com/dhruv_nakum" target="_blank" rel="noreferrer">
            TWITTER
          </a>
          <p>/</p>

          <a href="https://github.com/red-star25" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
