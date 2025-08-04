import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username:"Bikash",
    age: 21,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-2xl p-5 font-bold mb-4'>Tailwind Test</h1>
      <Card username = "ZIDD AUR REACT" someObj = {myObj}/>
      <Card username= "Bikash"/>
    </>
  )
}

export default App
