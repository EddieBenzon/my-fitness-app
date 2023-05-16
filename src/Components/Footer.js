import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-wrapper">
        Made by Eddie Benzon |{" "}
        <a
          href="https://github.com/EddieBenzon"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github Profile{" "}
        </a>{" "}
        |{" "}
        <a
          href="https://eddie-benzon-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Portfolio Site{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
