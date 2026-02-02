import React from 'react'

export const Map2 = () => {

   let users = [
      {id:1,name:"Hetansh",age:21,gender:"male"},
      {id:2,name:"Jaya",age:22,gender:"female"},
      {id:3,name:"Nisarg",age:21,gender:"male"},
   ]

  return (
    <div style={{textAlign:'center', margin:20}}>
      <h1>MAP 2</h1>
      {
         users.map((user)=>{
            return <li>{user.id}-{user.name}-{user.age}-{user.gender}</li>
         })
      }
    </div>
  )
}
