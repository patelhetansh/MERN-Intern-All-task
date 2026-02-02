import React from 'react'

export const Map6 = () => {

   var students = [
      { id: 1, name: "Hetansh", age: 23, marks: 78, city: "Unjha", gender: "male" },
      { id: 2, name: "Yash", age: 25, marks: 81, city: "Mehsana", gender: "male" },
      { id: 3, name: "Payal", age: 22, marks: 72, city: "ahmedabad", gender: "female" },
   ]

   return (
      <div style={{textAlign:'center'}}>
         <h1>Map 6</h1>
         <table className='table'>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>MARKS</th>
                  <th>CITY</th>
                  <th>GENDER</th>
               </tr>
            </thead>
            <tbody>
               {
                  students.map((std) => {
                     return <tr>
                        <td style={{backgroundColor:'gray', color: 'white'}}>{std.id}</td>
                        <td style={{backgroundColor:'green', color: 'white'}}>{std.name}</td>
                        <td style={{backgroundColor:'yellow', color: 'black'}}>{std.age}</td>
                        <td style={{backgroundColor:'skyblue', color: 'black'}}>{std.marks}</td>
                        <td style={{backgroundColor:'orange', color: 'black'}}>{std.city}</td>
                        <td style={{backgroundColor:'lightgrey', color: 'black'}}>{std.gender}</td>
                     </tr>
                  })
               }
            </tbody>
         </table>
      </div>
   )
}
