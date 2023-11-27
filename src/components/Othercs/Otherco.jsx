import React from "react";
import "./styles.css";
import Fotter from "../Fotter.jsx/Fotter";
const Otherco = () => {
  return (
    <div>
      <div className="oprobody2">
        <div className="oprogradients2"></div>
        <div className="oproducontent2">
          <p>
            <span>GitHub Advanced Security </span> enables you to find and fix
            vulnerabilities with ease and ship secure code quickly.
          </p>
          <h3>Dive into GitHub Advanced Security </h3>
          <button>Did you know?</button>
          <h1 className="oprohedsh2">7x faster</h1>
          <h4>vulnerability fixes with GitHub1 </h4>
        </div>
      </div>
      <div className="feturecomponet">
        <img
          src="https://github.githubassets.com/assets/shape-1-c219318e479a.svg"
          alt=""
          className="animelogoa"
        />
        <div className="feturconholder">
          <div className="fet1mkn">
            <h1>
              <span>Code scanning </span>is our code analysis tool that helps
              you remediate issues in your code.
            </h1>
            <h2>Download the latest SAST ebook</h2>
          </div>
          <img
            src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=772&format=webpll"
            alt=""
          />
        </div>
        <div className="otherfeture">
          <div>
            <div>
              <h1>
                <span>Dependabot </span> makes it easy to find and fix
                vulnerable dependencies in your supply chain.
              </h1>
              <h2>Explore Dependabot </h2>
            </div>
            <img
              src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&format=webpll"
              alt=""
            />
          </div>
          <div>
            <div>
              <h1>
                <span>Secret scanning</span>automatically looks for partner
                patterns and prevents fraudulent use of accidentally committed
                secrets.
              </h1>
              <h2>Read about secret scanning </h2>
            </div>
            <img
              src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&format=webpll"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="colabsection ">
        <div className="colab2">
          <div className="colabciar"></div>
          <div className="colabheadings">
            <h2>Collaboration</h2>
            <h1 className="colabheadingmain1">Supercharge collaboration</h1>
            <h1 className="colabheadingmain12">
              GitHub helps your teams work more <br />
              efficiently together.
            </h1>
          </div>
        </div>
        <div className="colabheroimgsdfg">
          <img
            src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1498&format=webpll"
            alt=""
            className="imgcola1"
          />
          <img
            src="https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png"
            alt=""
            className="imgcola2"
          />
          <img
            src="https://github.githubassets.com/assets/shape-3-9e542b5c31b8.svg"
            alt=""
            className="imgcola3"
          />
        </div>
        <div className="probody2">
          <div className="progradients2"></div>
          <div className="producontent2">
            <p>
              <span>GitHub Issues and GitHub Projects</span> supply project
              management tools that adapt to your team alongside your code.
            </p>
            <h3>Get started with GitHub Issues </h3>
            <button>Did you know?</button>
            <h1 className="prohedsh2">80% </h1>
            <h4>reduction in onboarding time with GitHub2</h4>
          </div>
        </div>
        <div className="otherfeture">
        <div>
          <div>
            <h1><span>GitHub Discussions </span>creates space to ask questions and have open-ended conversations..</h1>
            <h2>Jump into GitHub Discussions  </h2>
          </div>
          <img
            src="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=724&format=webpll"
            alt=""
          />
        </div>
        <div>
          <div><h1><span>Pull requests</span>allow real-time communication and collaboration about code changes.</h1>
          <h2>Check out pull requests  </h2></div>
          <img
            src="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=724&format=webpll"
            alt=""
          />
        </div>
      </div>
      <div className="feturconholder">
        <div className="fet1mkn">
          <h1>
            <span>GitHub Sponsors </span>lets you support your favorite open source maintainers and projects.
          </h1>
          <h2>Invest with GitHub Sponsors  </h2>
        </div>
        <img
          src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll"
          alt=""
        />
      </div>
      <Fotter/>
      </div>
      
    </div>
  );
};

export default Otherco;
