
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) { 
            navigate("/")
        }
    },[navigate])
    
    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch("http://localhost:8000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type":"application/json"
            } })
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        navigate("/")
    }

  return (
      <div className='signup' >
          <img src="https://c.wallhere.com/photos/24/cc/city_urban_architecture_building_cityscape_reflection_lights_city_lights-1618577.jpg!d" alt=""/>
          <h5> Real Estate Portfolio Management</h5>
          <form>
          <h3> Signup</h3>
              <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} />
              <input type='text' placeholder='enter email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input type='password' placeholder='enter password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button onClick={collectData} type='button'> Signup</button>
          </form>
      
    </div>
  )
}

export default Signup
