import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponents } from './Components/HeaderComponents';
import { FooterComponents } from './Components/FooterComponents';
import { ContentComponents } from './Components/ContentComponents';
// import './App.css'

function App() {

  return (
    <div>
      <HeaderComponents></HeaderComponents>
      <ContentComponents></ContentComponents>
      <FooterComponents></FooterComponents>
    </div>
  )
}

export default App
