"use client"
import { useEffect, useState } from "react";
import Carosel from "./components/Carosel";
import Dasboard from "./components/Dasboard";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import axios from "axios";


export default function Home() {

  const [auth, setAuth]=useState(false)

  useEffect(() => {
    axios.get('/api/account/auth')
    .then(response=>{

      console.log(response,"responseresponseresponse")
      if(response.status === 200){
        setAuth(true)
      }else {
        setAuth(false)
      }
    })
  },[])

  return (
    <div>
      {auth ? (
        <>
        <Navbar/>
      <Dasboard />
      <Carosel />
      <Products />
      </>) : (<>Login Pls</>
      )}
    </div>
  )
}
