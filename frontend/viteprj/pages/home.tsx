import { useState } from 'react'
import axios from 'axios'

const Home=()=>{

  const[greet,setGreet] = useState("")

  const url = import.meta.env.VITE_GREET
  const greetBackend=async()=>{
    const resp=await axios.get(url)
    return resp.data?.message
  }

  const greetwrapper=async()=>{
    const resp=await greetBackend()
    setGreet(resp)
  }

  return (
    <>
    <h2>Test app</h2>
    <div>
      <a href="/login">login</a>
    </div>
    <button
    onClick={()=>{
      greetwrapper()
    }}
    >Greet</button>
    <p>{greet}</p>
    </>
  )
}

export default Home