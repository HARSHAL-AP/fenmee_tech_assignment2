import React from "react";
import "./style.css";
import eart from "./eart.png";
import logos from "./logos.png"
const Fotter = () => {
  return (
    <>
      <div className="herobody">
        <div className="gradients"></div>
        <div className="contentview">
          <h1 className="heroheading2 ">
            Over 100 million developers <br /> call GitHub home3
          </h1>
          <p className="herohdesc2 ">
            Whether you’re scaling your startup or just learning how to code,
            GitHub is your home. Join the world’s largest developer platform to
            build the innovations that empower humanity. Let’s build from here.
          </p>
          <div className="heroimlx">
            <div className="loginconter">
              <input
                type="text"
                className="emailcon"
                placeholder="Email Address"
              />
              <button className="submitbuton">Sign up for GitHub</button>
              <button className="starttrial">
                Start a free enterprise trial{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="canvaconteainr">
        <img src={eart} alt="" />
        <img
          src="https://github.githubassets.com/assets/footer-copilot-54114bfd1d20.png"
          alt=""
          className="p1"
        />
        <img
          src="https://github.githubassets.com/assets/footer-diamond-ed642fc95144.png"
          alt=""
          className="p2"
        />
        <img
          src="https://github.githubassets.com/assets/footer-orb-a0438104a7a2.png"
          alt=""
          className="p3"
        />
        <img
          src="https://github.githubassets.com/assets/footer-mona-d1c861cd8018.png"
          alt=""
          className="p4"
        />
      </div>
      <p className="blckerthign">
        1 This 7X times factor is based on data from the industry’s longest
        running analysis of fix rates Veracode State of Software Security 2023,
        which cites the average time to fix 50% of flaws as 198 days vs.
        GitHub’s fix rates of 72% of flaws with in 28 days which is at a minimum
        of 7X faster when compared.
      </p>
      <p className="blckerthign">
        2 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
        Security, a commissioned study conducted by Forrester Consulting, 2022.
        Results are for a composite organization based on interviewed customers.
      </p>
      <p className="blckerthign">
        3 There are now 100 million developers around the world using GitHub.
        Read the blog post.
      </p>
      <div className="mainfooter">
        <div className="fofotercontex">
          <div>
            <p>© 2023 GitHub, Inc</p>
            <p>Term</p>
            <p>Privacy (Updated 08/2022)</p>
            <p>Sitemap</p>
            <p>What is Git?</p>
          </div>
          <img src={logos} alt="" />
        </div>
      </div>
    </>
  );
};

export default Fotter;
