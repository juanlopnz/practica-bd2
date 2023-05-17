import React from 'react'

export const Results = ({ userFound}) => {

  // useEffect(()=>{
  //   console.log(userFound, email)
  // }, [userFound])

  return (
    <div className="row-span-2 bg-[#FCFFE7] border-solid border-8 border-[#2B3467]">
      <div className='flex flex-col'>
        <h1 className='place-self-center text-6xl py-4'>Resultado:</h1>
      </div>

      <div className='flex flex-col p-8'>
        <span>Email: {userFound.email}</span>
        <span>Nombre: {userFound.name}</span>
        <span>Telefono: {userFound.number}</span>
        <span>Fecha de Nacimiento: {userFound.date}</span>
      </div>
    </div>
    )
}