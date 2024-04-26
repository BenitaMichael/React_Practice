import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider'

const DOM = () => {

    const bodyEle = useRef()
    const handleClick = () =>{
        bodyEle.current.style.width = '400px'
    }
    const name = useContext(LoginContext)

  return (
    <div>
        <input type='text' ref={bodyEle}/>
        <button onClick={handleClick}>Click {name}</button>
      
    </div>
  )
}

export default DOM
