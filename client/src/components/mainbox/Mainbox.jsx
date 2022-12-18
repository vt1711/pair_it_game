import React, { useEffect, useState } from "react";
import Imagebox from "../imagebox/Imagebox";
import "./mainbox.css";

const Mainbox = () => {

    const [firstclick, setfirstclick] = useState(false);
    const [firstid, setfirstid] = useState("");
    const [var0, setvar0] = useState(null);
    const [var1, setvar1] = useState(null);
    const [var2, setvar2] = useState(null);
    const [var3, setvar3] = useState(null);
    const [var4, setvar4] = useState(null);
    const [var5, setvar5] = useState(null);
    const [var6, setvar6] = useState(null);
    const [var7, setvar7] = useState(null);
    const [var8, setvar8] = useState(null);
    const [var9, setvar9] = useState(null);
    const [var10, setvar10] = useState(null);
    const [var11, setvar11] = useState(null);
    const [var12, setvar12] = useState(null);
    const [var13, setvar13] = useState(null);
    const [var14, setvar14] = useState(null);
    const [x, setx] = useState(null);


    useEffect(() => {
       setx(Math.floor(Math.random() * 10 + 1) % 5);
    }, [])
    
   useEffect(()=>{
    console.log("..x..",x);
    switch (x) {
      case 0:
        setvar1(0) ; setvar4(0) ; 
        setvar0(1) ; setvar3(1) ; 
        setvar5(2) ; setvar6(2) ; 
        setvar7(3) ; setvar11(3) ; 
        setvar2(4) ; setvar8(4) ; 
        setvar9(5) ; setvar13(5) ; 
        setvar10(6) ; setvar14(6) ; 
        setvar12(7) ; 
  
        break;
      case 1:
        setvar12(0) ; setvar4 (0);
        setvar10(1) ; setvar3 (1);
        setvar9 (2); setvar6 (2);
        setvar2 (3); setvar11(3);
        setvar7 (4); setvar8 (4);
        setvar5 (5); setvar13(5);
        setvar0 (6); setvar14(6);
        setvar1 (7);
        break;
      case 2:
        setvar5(0) ; setvar4(0) ; 
        setvar0(1) ; setvar3(1) ; 
        setvar1(2) ; setvar6(2) ; 
        setvar9(3) ; setvar11(3) ; 
        setvar2(4) ; setvar8(4) ; 
        setvar7(5) ; setvar13(5) ; 
        setvar10(6) ; setvar14(6) ; 
        setvar12(7) ; 
        break;
      case 3:
        setvar14(0) ; setvar4(0) ; 
        setvar0(1) ; setvar12(1) ; 
        setvar5(2) ; setvar6(2) ; 
        setvar7(3) ; setvar8(3) ; 
        setvar2(4) ; setvar11(4) ; 
        setvar9(5) ; setvar13(5) ; 
        setvar10(6) ; setvar1(6) ; 
        setvar3(7) ; 
        break;
  
      default:
        setvar3(0) ; setvar4(0) ; 
        setvar0(1) ; setvar1(1) ; 
        setvar11(2) ; setvar6(2) ; 
        setvar7 (3); setvar5(3) ; 
        setvar13(4) ; setvar8(4) ; 
        setvar9(5) ; setvar2(5) ; 
        setvar10(6) ; setvar12(6) ; 
        setvar14(7) ; 
    }

   },[x])


    const checkmatch = (e) => {
        if (firstid === e.target.id) {
          console.log("yeyyy id match", firstid);
          setfirstclick(false);
        } else {
          console.log("arre..id din match");
          setfirstclick(false);
        }
      };
    
    const checkclick = (e) => {
      if (firstclick === true) {
        checkmatch(e);
      } else {
        setfirstclick(true);
        setfirstid(e.target.id);
        console.log("first click ...firstid ..",e.target.id);
      }
    };

  
  return (
    <>
      <div className="mainboxdiv">
        <Imagebox
          icontype={`${var0}`}
          onclick={(e) => {
            setfirstclick(e);
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var1}`}
          onclick={(e) => {
            setfirstclick(e);
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var2}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var3}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var4}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var5}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var6}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var7}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var8}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var9}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var10}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var11}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var12}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var13}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
        <Imagebox
          icontype={`${var14}`}
          onclick={(e) => {
            
            console.log("entered onclick", e.target.id);
              checkclick(e);
          }}
        />
      </div>
    </>
  );
};

export default Mainbox;
