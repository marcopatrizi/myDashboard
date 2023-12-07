import { useState } from 'react'
import './App.css'
import SideMenu from './components/SideMenu'
function App() {


  return (
    <>
      <header className='flex p-6  gap-5 items-end'>
        <img src="./src/assets/logoMP.svg" alt="" className='w-8 h-8'/>
        <h1 className=' text-zinc-500  font-bold  text-2xl'>Marco Patrizi</h1>
        <h2 className=' ml-10 text-zinc-600  font-bold  text-4xl'>Dashboard</h2>
      </header>
      <SideMenu></SideMenu>
    </>
  )
}

export default App
