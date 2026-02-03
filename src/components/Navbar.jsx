import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

               <ul class="navbar-nav mr-auto">

                  <li class="nav-item active">
                     <Link class="nav-link" to="/map1"> Map1 </Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/map2"> Map2</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/map3"> Map3</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/map4"> Map4</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/map5"> Map5</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/map6"> Map6</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/map7"> Map7</Link>
                  </li>

               </ul>

            </div>
         </nav>
      </div>
   )
}
