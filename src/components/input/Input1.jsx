import React, { useState } from 'react'

export const Input1 = () => {

   const [name, setname] = useState("")
   const [age, setage] = useState("")


   const nameHandler = (event) => {
      // console.log(event.target.value);
      setname(event.target.value)
   }
   const ageHandler = (event) => {
      setage(event.target.value)
   }


   return (
      <div style={{ textAlign: 'center' }}>
         <h1>Input 1</h1>
         <div>
            <label>NAME</label>
            <br></br>
            <input type="text" onChange={(event) => {nameHandler(event) }} ></input>
            {name}
         </div>
         <div>
            <label>AGE</label>
            <br></br>
            <input type="text" onChange={(event)=> {ageHandler(event)}}/>
            {age}
         </div>
      </div>

   )
}
