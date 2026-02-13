import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Form1 = () => {

  const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const submitHandler = (data)=>{
    setuserData(data)
    setisSubmited(true)
  }
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME</label>
            <input type='text' placeholder='Enter name' {...register("firstName")}></input>
          </div>
          <div>
            <label>AGE</label>
            <input type='text' placeholder='Enter age' {...register("age")}></input>
          </div>
          <div>
            <label>GENDER</label>  <br></br>
            MALE:<input type='radio' value="male" {...register("gender")}></input>
            FEMALE:<input type='radio' value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>HOBBIES</label> <br></br>
            GAMING :<input type='checkbox' value="gaming" {...register("hobbies")}></input><br />
            TRAVEL :<input type='checkbox' value="travel" {...register("hobbies")}></input><br />
            MUSIC :<input type='checkbox' value="music" {...register("hobbies")}></input><br />
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Name = {userData.firstName}</h1>
          <h2>Age = {userData.age}</h2>
          <h2>gender = {userData.gender}</h2>
          <h2>hobbies = {`${userData.hobbies}`}</h2>
        </div>
          }
        
    </div>
  )
}