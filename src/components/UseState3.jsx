import React, { useState } from "react";

export const UseState3 = () => {
  const [users, setUsers] = useState(["Hetansh","Yash"]); 
  const addUser = ()=>{
    setUsers([...users,"HEt"])
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseState3</h1>
      {
        users.map((u)=>{
            return <li>{u}</li>
        })
      }
      <button onClick={addUser}>push</button>
    </div>
  );
};