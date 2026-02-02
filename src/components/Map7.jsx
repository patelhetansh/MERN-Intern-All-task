import React from 'react'
import reactImg from '../assets/images/react.png'
import nodeImg from '../assets/images/node.png'
import pythonImg from '../assets/images/python.png'

export const Map7 = () => {

   const languages = [
      { name: "React", img: reactImg },
      { name: "Node.js", img: nodeImg },
      { name: "Python", img: pythonImg }
   ]

   return (
      <div style={{ textAlign: 'center' }}>
         <h1>Map 7</h1>
         <table className='table'>
            <thead>
               <tr>
                  <th>NAME</th>
                  <th>IMGAGE</th>
               </tr>
            </thead>
            <tbody>
               {
                  languages.map((lang) => {
                     return <tr>
                        <td style={{ fontSize: 15, padding:20 }}>{lang.name}</td>
                        <td> <img src={lang.img} alt={lang.name} width="50" height="50" /></td>
                     </tr>
                  })
               }
            </tbody>
         </table>
      </div>
   )
}
