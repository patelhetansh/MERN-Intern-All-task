import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponents } from './components/HeaderComponents';
import { FooterComponents } from './components/FooterComponents';
import { ContentComponents } from './components/ContentComponents';
import { Map1 } from './components/Map1';
import { Map2 } from './components/Map2';
import { Map3 } from './components/Map3';
import { Map4 } from './components/Map4';
import { Map5 } from './components/Map5';
import { Map6 } from './components/Map6';
import { Map7 } from './components/Map7';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Netflixmovies } from './components/Netflixmovies';
import { Netflixshow } from './components/Netflixshow';
import { Netflixhome } from './components/Netflixhome';
import { Watch } from './components/Watch';
import { Error } from './components/Error';
import { Function1 } from './components/Function1';
import { UseState1 } from './components/UseState1';
import { UseState2 } from './components/UseState2';
import { UseState3 } from './components/UseState3';
import { Employees } from './components/Employees';

// import './App.css'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='Netflixhome' element={<Netflixhome />}></Route>
        <Route path='Netflixshow' element={<Netflixshow />}></Route>
        <Route path='Netflixmovies' element={<Netflixmovies />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watch/:name' element={<Watch />}></Route>
        <Route path="/Function1" element={<Function1 />}></Route>
        <Route path="/UseState1" element={<UseState1 />}></Route>
        <Route path="/UseState2" element={<UseState2 />}></Route>
        <Route path="/UseState3" element={<UseState3 />}></Route>
        <Route path="/Employees" element={<Employees />}></Route>
        <Route path="/*" element={<Error />}></Route>

      </Routes>
    </div>
  )
}

export default App
