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
// import './App.css'

function App() {

  return (
    <div>
      <HeaderComponents></HeaderComponents>
      <Map5></Map5>
      <FooterComponents></FooterComponents>
    </div>
  )
}

export default App
