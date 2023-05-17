import React, { useState } from 'react'

export const Query = ({ setUserFound, email, setEmail }) => {

  const manejarEmail = (email) => {
    setEmail(email)
  }
  
  const getUser = () => {

    if(!email) return;

    fetch(`http://localhost:4001/api/users/${email}`).then((res) => {
      res.json().then((res) => {
        setUserFound({...res.data, email})
      })
    })
    setEmail("")
  }

  return (
    <div className="flex flex-col gap-2 bg-[#BAD7E9] m-2 rounded-md drop-shadow-lg place-content-center">
      <h1 className="self-center text-[#EB455F] text-4xl font-black">Consulta</h1>
      <div className="flex font-bold text-[#2B3467] gap-3 p-2 text-base">
        <span>Email</span>
        <input value={email} type="email" className="w-2/3" onChange={(e) => { manejarEmail(e.target.value) }} />
      </div>
      <div className="self-center p-2">
        <button className="text-base text-[#FCFFE7] rounded-md p-1 bg-[#2B3467]" onClick={getUser}>Consultar</button>
      </div>
    </div>
  )
}
