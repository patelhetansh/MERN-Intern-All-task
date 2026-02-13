import React from 'react'
import { useForm } from 'react-hook-form'

export const Form2 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log("errors...", errors)

  const submitHandler = (data) => {
    alert("form subbmited...")
    console.log(data)
  }

  const agevalidation = {
    ageHandler: {
      required:{
        value: true,
        message:"Age is Required"
      }
    },
    addressHandler:{
      required:{
        value:true,
        message:"Address are required"
      }
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Form 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name", { required: { value: true, message: "Name is required" } })} />
          {errors.name?.message}
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age",agevalidation.ageHandler)} />
          {errors.age?.message}
        </div>
        <div>
          <label>ADDRESS</label>
          <input type="text" {...register("Address",agevalidation.addressHandler)} />
          {errors.Address?.message}
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div >
  )
}
