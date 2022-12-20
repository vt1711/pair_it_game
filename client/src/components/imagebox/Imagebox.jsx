import React from "react";
import "./imagebox.css";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { TbError404 } from "react-icons/tb";

const Imagebox = ({ icontype, onclick }) => {
  switch (icontype) {
    case "0":
      return (
        <div
          className="imageboxdiv laptop"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <FaLaptopCode className="svgicons" />
          </div>
        </div>
      );
    case "1":
      return (
        <div
          className="imageboxdiv react"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <FaReact className="svgicons" />
          </div>
        </div>
      );
    case "2":
      return (
        <div
          className="imageboxdiv html"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <AiFillHtml5 className="svgicons" />
          </div>
        </div>
      );
    case "3":
      return (
        <div
          className="imageboxdiv css"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <DiCss3 className="svgicons" />
          </div>
        </div>
      );
    case "4":
      return (
        <div
          className="imageboxdiv js"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <SiJavascript className="svgicons" />
          </div>
        </div>
      );
    case "5":
      return (
        <div
          className="imageboxdiv node"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <IoLogoNodejs className="svgicons" />
          </div>
        </div>
      );
    case "6":
      return (
        <div
          className="imageboxdiv cpp"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <SiCplusplus className="svgicons" />
          </div>
        </div>
      );
    default:
      return (
        <div
          className="imageboxdiv error"
          id={`${icontype}`}
          onClick={(e) => {
            onclick(e);
          }}
        >
          <div className="svgdiv">
            <TbError404 className="svgicons" />
          </div>
        </div>
      );
  }
};

export default Imagebox;
