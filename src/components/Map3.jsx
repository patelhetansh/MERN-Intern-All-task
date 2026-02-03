import React from 'react'

export const Map3 = () => {

   let students = [
      { id: 1, name: 'hetnash', age: 21, marks: 80, city: "unjha" },
      { id: 1, name: 'Nisarg', age: 21, marks: 80, city: "Kamli" },
      { id: 1, name: 'Piyush', age: 21, marks: 80, city: "Mahesana" },
   ]

   return (
      <div style={{ textAlign: 'center', margin: 10, fontSize:25 }}>
         <h1>Map 3</h1>
         {
            <table align='center'>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>NAME</th>
                     <th>AGE</th>
                     <th>CITY</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     students.map((std) => {
                      return  <tr>
                           <td>{std.id}</td>
                           <td>{std.name}</td>
                           <td>{std.age}</td>
                           <td>{std.city}</td>
                        </tr>
                     })
                  }
               </tbody>
            </table>
         }
      </div>
   )
}
