import React, { useState } from 'react'
import './scoreboard.css'
const Scoreboard = () => {
    const [score, setscore] = useState(0)
    const [point, setpoint] = useState(1)
  return (
    <>
    <div className='scoreboarddiv' >
    <span className='scoreboardtitle'>Score Board</span>
    <div className='scorecount'>
    <div className='totalscore'>
    {score}/7
    </div>
     <div className='currentpoint'>
    {point}
     </div>
    </div>
    </div>

    </>
  )
}

export default Scoreboard