import React from "react";
import "./styles.css";

const Fetures = () => {
  return (
    <div className="feturecomponet">
      <img
        src="https://github.githubassets.com/assets/shape-1-c219318e479a.svg"
        alt=""
        className="animelogoa"
      />
      <div className="feturconholder">
        <div className="fet1mkn">
          <h1>
            <span>GitHub Action </span>automates your build, test and
            development workflow with simple msimple and sure CL/CD
          </h1>
          <h2>Discover GitHub Actions </h2>
        </div>
        <img
          src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll"
          alt=""
        />
      </div>
      <div className="otherfeture">
        <div>
          <div>
            <h1><span>GitHub Codespaces</span> offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.</h1>
            <h2>Check out GitHub Codespaces </h2>
          </div>
          <img
            src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=725&format=webpll"
            alt=""
          />
        </div>
        <div>
          <div><h1><span>GitHub Mobile</span>GitHub Mobile fits your projects in your pocket, so you never miss a beat while on the go.</h1>
          <h2>Download GitHub Mobile </h2></div>
          <img
            src="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=724&format=webpll"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Fetures;
