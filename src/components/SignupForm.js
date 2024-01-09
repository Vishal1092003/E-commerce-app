import React from 'react'
import {  AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function SignupForm({ setLogedIn}) {
    const navigate=useNavigate();
    const[FormData,setFormData]=useState({firstname:"",lastname:"",email:"",createpassword:"",confirmpassword:""})

    const[showPassword,setshowPassword]=useState(false)
    const[accountType,setAccountType]=useState("student")
    function onChangeHandler(event){
      setFormData((prevdata) => ({
  ...prevdata,
  [event.target.name]: event.target.value
}));

    }
    function onSubmitHandler(event){
        event.preventDefault();
    if(FormData.createpassword != FormData.confirmpassword){
        toast.error("Password do not match")
        return;
    }
    setLogedIn(true)
    toast.success("Account Created")
    const AccountData={
        ...FormData
    }
    console.log(AccountData);
    navigate("/dashboard")
    }
  return (
    <div>
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
       <button  className={`${accountType==="student"
       ?" bg-richblack-900 text-richblack-5 ":
       "bg-transparent text-richblack-200"}
       py-2 px-5 rounded-full transition-all duration-200
       `}
       onClick={()=>setAccountType("student")}
       >
       Student
       </button>
        <button  className={`${accountType==="instructor"
       ?" bg-richblack-900 text-richblack-5 ":
       "bg-transparent text-richblack-200"}
       py-2 px-5 rounded-full transition-all duration-200
       `}
        onClick={()=>setAccountType("instructor")}
        >
        Instructor
        </button>
      </div>
      <form onSubmit={onSubmitHandler}>
      <div className='flex gap-x-4 mt-[20px]'>
        <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type='text'
            placeholder='enter first name'
            name='firstname'
            value={FormData.firstname}
            onChange={onChangeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type='text'
            placeholder='enter last name'
            name='lastname'
            value={FormData.lastname}
          onChange={onChangeHandler}
         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
        </label>
      </div >
      <div className='mt-[20px]'>
          <label className='w-full mt-[20px]'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type='text'
            placeholder='enter Email'
            name='email'
            value={FormData.email}
            onChange={onChangeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
        </label>
      </div>
       
        <div className='w-full flex gap-x-4 mt-[20px]'>
         <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type={showPassword?("text"):("password")}
            placeholder='Enter password'
            name='createpassword'
            value={FormData.createpassword}
            onChange={onChangeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
             <span  className='absolute right-3 top-[38px] cursor-pointer'
             onClick={() => setshowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB'/>) : (<AiOutlineEye fontSize={24} fill='#AFB'/>)}
                    </span>
        </label>
         <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm Password<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type={showPassword?("text"):("password")}
            placeholder='Enter password'
            name='confirmpassword'
            value={FormData.confirmpassword}
             onChange={onChangeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
              <span  className='absolute right-3 top-[38px] cursor-pointer'
              onClick={()=>setshowPassword((prev)=>!prev)}>
              {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB'/>):(<AiOutlineEye fontSize={24} fill='#AFB'/>)}
            </span>
        </label>
        </div>
        
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
            Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
