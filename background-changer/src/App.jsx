import { useState } from 'react'
import React from 'react'
// import "./App.css"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className='w-full h-screen'
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center top-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-lg'>
          <button 
          onClick={()=>setColor("red")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-red-500'>RED</button>
          <button 
          onClick={()=>setColor("blue")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-blue-500'>BLUE</button>
          <button 
          onClick={()=>setColor("yellow")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-yellow-500'>YELLOW</button>
          <button
          onClick={()=>setColor("purple")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-purple-500'>PURPLE</button>
          <button
          onClick={()=>setColor("green")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-green-500'>GREEN</button>
          <button 
          onClick={()=>setColor("#50C878")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-emerald-400'>EMERALD</button>
          <button 
          onClick={()=>setColor("pink")}
          className=' outline-none px-4 py-1 rounded-full text-white bg-pink-500'>PINK</button>
        </div>
      </div>
   </div>
  )
}

export default App
