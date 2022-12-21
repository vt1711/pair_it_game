import React, { useEffect } from 'react'
import './scoreboard.css'
import { useSelector } from "react-redux";
const Scoreboard = () => {

  const score = useSelector((score) => {
    return score.pointschange;
  });
  const point = useSelector((point) => {
    return point.currentpoint;
  })


  useEffect(() => {
    const currentpoint = document.getElementById("currentpoint");
    if (point === "+1") { currentpoint.style.color = "rgb(98, 201, 47)" }
    else if (point === "-1") { currentpoint.style.color = "rgb(133, 6, 6)" }
    else if (point === "0") { currentpoint.style.color = "grey" }

  }, [point])


  return (
    <>
      <div className='scoreboarddiv' >
        <span className='scoreboardtitle'>Score Board</span>
        <div className='scorecount'>
          <div className='totalscore'>
            Total Points : <span id='totalscore'>{score} / 7</span>
          </div>
          <div className='currentpoint' >
            Current Point : <span id='currentpoint' >{point}</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Scoreboard