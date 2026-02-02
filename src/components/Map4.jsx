import React from 'react'

export const Map4 = () => {
   var cities = [
      { id: 1, name: "Unjha", pop: 500000, AQI: 200 },
      { id: 2, name: "Mahsana", pop: 2000000, AQI: 250 },
      { id: 3, name: "Ahemdabad", pop: 4000000, AQI: 350 },
   ];

   return (
      <div style={{ textAlign: "center" }} >
         <h1>Map 4</h1>
         <table className="table table-dark" >
            <thead>
               <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>POPULATION</th>
                  <th>AQI</th>
               </tr>
            </thead>
            <tbody>
               {
                  cities.map((c) => {
                     return <tr>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.pop}</td>
                        <td>{c.AQI}</td>
                     </tr>
                  })
               }
            </tbody>
         </table>
      </div>
   )
}
