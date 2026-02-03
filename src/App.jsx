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
// import './App.css'

function App() {

  return (
    <div>
      <Navbar></Navbar>
     <Routes>
      <Route path='map1' element={<Map1 />}></Route>
      <Route path='map2' element={<Map2 />}></Route>
      <Route path='map3' element={<Map3 />}></Route>
      <Route path='map4' element={<Map4 />}></Route>
      <Route path='map5' element={<Map5 />}></Route>
      <Route path='map6' element={<Map6 />}></Route>
      <Route path='map7' element={<Map7 />}></Route>
      <Route path='/' element={<Home />}></Route>
      
     </Routes>
    </div>
  )
}

export default App
