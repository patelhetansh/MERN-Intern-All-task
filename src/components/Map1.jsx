import React from 'react'

export const Map1 = () => {
  
   let cars = ["BMW", "RR", "LEMBO","MUSTANG"]
  
   return (
    <div style={{textAlign:'center'}}>
      <h1>Map 1</h1>
      {
         cars.map((c)=>{
            return <h2>{c}</h2>
         })
      }
    </div>
  )
}
