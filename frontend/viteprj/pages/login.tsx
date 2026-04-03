import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = React.useState("user")
    const [password, setPassword] = React.useState("user@test")
    const navigate=useNavigate()

    const url=import.meta.env.VITE_LOGIN

    const login=async()=>{
      const resp=await axios.post(url,
        {username:username,password:password},
        {
          headers:{
            "Content-Type":"application/json"
          }
        }
      )
      console.log(resp)
      if (resp.status===200){
        navigate("/")
      }else{
        alert(`something went wrong:${resp.data?.message}`)
      }
    }

  return (
    <div>
        hi login page
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
          login()
          }}>
            <label htmlFor="">username</label>
            <input type="text" name="" id="" 
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            />

            <label htmlFor="">password</label>
            <input type="text" name="" id="" 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login