import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';
function Navbar(props) {
     
    let  LogedIn = props.LogedIn;
    let  setLogedIn = props.setLogedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
     <NavLink to="/">
          <img src={Logo} width={160} height={32} loading='lazy'></img>
     </NavLink>
    
        <nav  >
      <ul className=' text-white flex gap-x-6'>       
        <li>
           <NavLink to="/">
          Home
           </NavLink>
        </li>
        <li>
           <NavLink to="/">
          About
           </NavLink>
        </li>
        <li>
           <NavLink to="/">
          Contact
           </NavLink>
        </li>        
    </ul>
    </nav>
    

     
    
      <div  className='flex items-center ml-5 mr-3 gap-x-4 ' >
        {  !LogedIn&&
             <NavLink to="/login">
                <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ' >
                    Login
                </button>
            </NavLink>
        }
        
        {  !LogedIn&&
              <NavLink to="/signup">
              <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ' 
              >SignUp</button>
            </NavLink>
         }
         {
            LogedIn &&
             <NavLink to="/">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '
                    onClick={()=>{
                        setLogedIn(false);
                        toast.success("Logged Out")
                    }}
                    >Log Out</button>
                </NavLink>
           
         }
         {
            LogedIn &&
             <NavLink to="/dashboard">
                  
                  <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ' 
                  >  DashBoard</button>
                </NavLink>
           
         }
        
      </div >
    
      

    </div>
  )
}

export default Navbar
