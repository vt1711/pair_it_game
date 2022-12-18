import React, { useState } from "react";
import "./imagebox.css";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { TbError404 } from "react-icons/tb";

const Imagebox = ({ icontype,onclick }) => {
  

  const Icontype = ({ icontype }) => {


  

    switch (icontype) {
      case "0":
        return (
          <FaLaptopCode
            onClick={(e) => {
            
              onclick(e);
            }}
            className="imageboxdiv laptop"
            id={`${icontype}`}
          />
        );
      case "1":
        return (
          <FaReact
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv react"
            id={`${icontype}`}
          />
        );
      case "2":
        return (
          <AiFillHtml5
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv html"
            id={`${icontype}`}
          />
        );
      case "3":
        return (
          <DiCss3
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv css"
            id={`${icontype}`}
          />
        );
      case "4":
        return (
          <SiJavascript
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv js"
            id={`${icontype}`}
          />
        );
      case "5":
        return (
          <IoLogoNodejs
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv node"
            id={`${icontype}`}
          />
        );
      case "6":
        return (
          <SiCplusplus
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv cpp"
            id={`${icontype}`}
          />
        );
      default:
        return (
          <TbError404
            onClick={(e) => {
              
              onclick(e);
            }}
            className="imageboxdiv error"
            id={`${icontype}`}
          />
        );
    }
  };

  return (
    <>
      <Icontype icontype={`${icontype}`} />
    </>
  );
};

export default Imagebox;
