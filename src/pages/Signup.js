import React from 'react'
import Template from '../components/Template'
import signupimg from '../assets/signup.png'

function Signup({setLogedIn}) {
  return (
    <Template
      title="join the millions learning to code with studyNotion for free"
      desr1="Build Skills for today"
      desr2="Education to future proof your carrer"
      image={signupimg}
      formtype="signup"
      setLogedIn={setLogedIn}
      

    />
  )
}

export default Signup
