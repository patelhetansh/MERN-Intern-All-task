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
// import './App.css'

function App() {

  return (
    <div>
      <HeaderComponents></HeaderComponents>
      <Map4></Map4>
      <Map5></Map5>
      <Map6></Map6>
      <Map7></Map7>
      <FooterComponents></FooterComponents>
    </div>
  )
}

export default App
