
import { useEffect, useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  }, [navigate])

  const collectData = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:8000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result.user))
      localStorage.setItem("token", JSON.stringify(result.auth))
      navigate("/")
    } else {
      alert("please enter correct login details")
    }
  }

  return (
    <div className='login'>
      <img src="https://c.wallhere.com/photos/24/cc/city_urban_architecture_building_cityscape_reflection_lights_city_lights-1618577.jpg!d" alt="" />
      <h5> Real Estate Portfolio Management</h5>

      <form>
        <h3> Login </h3>
        <input type='text' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={collectData} type='button'> Signup</button>
      </form>

    </div>
  )
}

export default Login
