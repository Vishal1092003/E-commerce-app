import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frame from "../assets/frame.png"
import { FcGoogle } from "react-icons/fc";
function Template({title,desr1,desr2,image,formtype,setLogedIn}) {
  return (
    <div className='flex justify-between w-11/12 max-w[1160px] py-12 mx-12 gap-x-30 gap-y-0'>
    
    <div className='w-11/12 max-w-[450px] mx-0'>
        <h1  className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'
        >{title}</h1>
        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
        <span className='text-richblack-100'>{desr1}</span>
        <br/>
        <span className='text-blue-100 italic'>{desr2}</span>
        
        </p>
        
        {
            formtype==="signup"
            ?(<SignupForm setLogedIn={setLogedIn}/>):(<LoginForm setLogedIn={setLogedIn}/>)
        }
        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='h-[1px] w-full bg-richblack-700'></div>
            <div className='text-richblack-700 font-medium leading[1.375]'>OR</div>
            <div className='h-[1px] w-full bg-richblack-700' ></div>
           
        </div>
      
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'
         >
         <FcGoogle />
        <p >Sign Up with Google</p>
        </button>
        </div>
       
         <div className='relative w-11/12 max-w-[450px]'>
            <img 
              src={frame}
              alt='pattern'
              width={558}
              height={504}
              loading='lazy'
            />
            <img
              src={image}
              alt='students'
              width={558}
              height={504}
              loading='lazy'
              className='absolute -top-4 right-4'
            />
         </div>
    </div>
  )
}

export default Template
