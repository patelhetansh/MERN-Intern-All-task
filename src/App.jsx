import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  var hetansh = {
    name: "Patel Hetansh",
    status: "MERN Stack"
  };

  return (
    <div>
      <h1>Name : {hetansh.name}</h1>
      <h1>Course in : {hetansh.status}</h1>
    </div>
  )
}

export default App
