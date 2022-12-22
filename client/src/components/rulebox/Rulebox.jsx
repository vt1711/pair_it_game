import React from 'react'
import './rulebox.css'
import { IoCaretBack } from "react-icons/io5";
import { NavLink } from "react-router-dom"
const Rulebox = () => {
  return (
    <>
      <div className='rulebox'>
        <div className='rulebook'>
          <h3 className='howtotititle'>How To Play</h3><br /><br />
          <p>1. Click on the boxes to select and match the image pairs.</p><br />
          <p>2. Each right match will give <span className='plusonepoint'>+1</span> point.</p><br />
          <p>3. Each wrong match will give <span className='zeropoint'> 0 </span> point.</p><br />
          <p>4. There are total 7 pairs and thus max score is 7.</p><br />
          <p>5. There is one box with <span className='minusonepoint'>404</span> code clicking it will lead to <span className='minusonepoint'> -1 </span> point.</p><br />
          <p>6. Thus minimum score is -1 (case where in player selects all wrong boxes and also selects error box).</p><br />
          <p>7. Refresh the page to restart the game.</p><br />
          <NavLink to='/'>
            <IoCaretBack className='backbutton' />

          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Rulebox