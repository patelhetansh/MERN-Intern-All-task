import React from 'react'

export const Map1 = () => {
  
   let cars = ["BMW", "RR", "LEMBO","MUSTANG"]
  
   return (
    <div>
      <h1>MAP 1</h1>
      {
         cars.map((c)=>{
            return <h1>{c}</h1>
         })
      }
    </div>
  )
}
