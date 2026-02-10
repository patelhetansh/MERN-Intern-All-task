import React from 'react'

export const Function1 = () => {

   const test = () => {
      alert("test function called.....")
   }
   const test2 = (x) => {
      alert("value of x " + x)
   }

   return (
      <div style={{ textAlign: "center" }}>
         <h1>Function1</h1>
         <button onClick={test}>CLICK</button>
         {/* <button onClick={test2(2)}>CLICK2</button> */}
         <button onClick={() => { test2(100) }}>CLICK 2</button>
      </div>
   )
}
