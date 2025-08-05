import React from 'react'
import { useState , useCallback , useEffect , useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow , setNumberAllow] = useState(false);
  const [charAllow , setCharAllow] = useState(false);
  const [passWord , setPassWord] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback (()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str+= "0123456789"
    if(charAllow) str+= "!@#$%^&*()_+/-"

    for (let i = 1; i < length; i++) {
      let char =Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassWord(pass)
    
  } , [length , numberAllow , charAllow , setPassWord])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9)
      window.navigator.clipboard.writeText(passWord)
  } , [passWord])

  useEffect( ()=>{
      passwordGenerator()
  } , [length , numberAllow , charAllow , passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-center text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={passWord} 
           className='outline-none w-full py-1 px-3 bg-white '
           placeholder='Password'
           readOnly
           ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' >Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 '>
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>{setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllow}
          id='numberInput'
          onChange={()=>{
            setNumberAllow((prev) => !prev)
          }}
           />
           <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {charAllow}
          id='characterInput'
          onChange={()=>{
            setCharAllow((prev) => !prev)
          }}
           />
           <label htmlFor="characterInput">Character</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
