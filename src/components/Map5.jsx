import React from 'react'

export const Map5 = () => {

   var students = [
      { id: 1, name: "Hetansh", age: 23, marks: 78, city: "Unjha", gender: "male" },
      { id: 2, name: "Yash", age: 25, marks: 81, city: "Mehsana", gender: "male" },
      { id: 3, name: "Payal", age: 22, marks: 72, city: "ahmedabad", gender: "female" },
   ]

   return (
      <div style={{textAlign:'center'}}>
         <h1>Map5</h1>
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
                     return <tr style={{backgroundColor: std.gender == 'female' && 'pink'}}>
                        <td>{std.id}</td>
                        <td>{std.name}</td>
                        <td style={{backgroundColor: std.age>23 && 'red',color: std.age>23 && 'white'}}>{std.age}</td>
                        <td style={{backgroundColor: std.marks>75 && 'green', color: std.marks>75 && 'white'}}>{std.marks}</td>
                        <td>{std.city}</td>
                        <td>{std.gender}</td>
                     </tr>
                  })
               }
            </tbody>
         </table>
      </div>
   )
}
