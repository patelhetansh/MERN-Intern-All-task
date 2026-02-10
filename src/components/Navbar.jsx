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
                     <Link class="nav-link" to="/Netflixhome"> Netflixhome</Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/Netflixshow"> Show</Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/Netflixmovies"> Movies</Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/Function1"> Function1</Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/UseState1"> UseState1</Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/UseState2"> UseState2</Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/UseState3"> UseState3</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/Employees">Employees</Link>
                  </li>
               </ul>

            </div>
         </nav>
      </div>
   )
}
