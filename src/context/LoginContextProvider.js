import { createContext, useState } from "react"
import React from 'react'

export const LoginContext = createContext()

const LoginContextProvider = ({children}) => {
    const [name, setName] = useState('Benita')
  return (
    <div>
      <LoginContext.Provider value={name}>
        {children}
      </LoginContext.Provider>
    </div>
  )
}

export default LoginContextProvider
