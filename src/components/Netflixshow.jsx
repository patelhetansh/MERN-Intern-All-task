import React from 'react'
import { Link } from 'react-router-dom'

export const Netflixshow = () => {
   return (
      <div style={{ textAlign: 'center' }}>
         <h1>Netflixshow</h1>
         <ul>
            <li>
               <Link to="/watch/Kill">Kill</Link>
            </li>
            <li>
               <Link to="/watch/Breking Bad">Breking Bad</Link>
            </li>
            <li>
               <Link to="/watch/Game Of Thrones">Game Of Thrones</Link>
            </li>
         </ul>
      </div>
   )
}
