import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
function Login({setLogedIn}) {
  return (
    <Template
      title="Welcome Back"
      desr1="Build Skills for today"
      desr2="Education to future proof your carrer"
      image={loginImg}
      formtype="login"
      setLogedIn={setLogedIn}


    />
  )
}

export default Login
