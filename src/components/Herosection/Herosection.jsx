import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const Herosection = () => {
  return (
    <div className="herosection">
      <Navbar />
      <div className="herobody">
        <div className="gradients">
               <div className="grad1">

               </div>
               <div className="grad2">
               <IoIosArrowBack /> <IoIosArrowForward />
               </div>
                <div className="grad3">
                
               </div>


        </div>
        <div className="contentview">
          <h1 className="heroheading ">Let’s build from here</h1>
          <p className="herohdesc ">
            Let’s build from here The world’s leading AI-powered developer
            platform.
          </p>
          <div className="heroimlx">
          <div className="loginconter">
            <input type="text" className="emailcon" placeholder="Email Address"/>
            <button className="submitbuton" >Sign up for GitHub</button>
            <button className="starttrial">Start a free enterprise trial </button>
          </div>
         
          </div>
          <div>
            <p className="imsdjgh">Trusted by the world’s leading organizations ↘︎</p>
            <div className="loimgscom">
             <img src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="" />
             <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="" />
             <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="" />
             <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="" />
             <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="" />
             <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
