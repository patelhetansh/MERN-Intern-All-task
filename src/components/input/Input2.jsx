import React, { useState } from 'react'

export const Input2 = () => {

   const [name, setname] = useState("")
   const [age, setage] = useState("")
   const [gender, setgender] = useState("")

   const nameHandler = (event) => {
      setname(event.target.value)
   }
   const ageHandler = (event) => {
      setage(event.target.value)
   }
   const genderHandler = (event) => {
      setgender(event.target.value)
   }

   return (
      <div style={{ textAlign: 'center' }}>
         <h1>Input 2</h1>
         <div>
            <label>NAME</label>
            <input type="text" onChange={(event) => { nameHandler(event) }} />
            {name}
         </div>
         <div>
            <label>AGE</label>
            <input type="text" onChange={(event) => { ageHandler(event) }} />
            {age}
         </div>
         <div>
            <label>GENDER</label>
            <br />
            MALE : <input type="radio" name="gender" value="male" onChange={(event) => { genderHandler(event) }} />
            FEMALE : <input type="radio" name="gender" value="female" onChange={(event) => { genderHandler(event) }} />
            <br />
            {gender}
         </div>
      </div>
   )
}
