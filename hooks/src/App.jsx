import React, { createContext, useState } from 'react'
import UseState from "./components/UseState"
import "./App.css"
import UseContext from './components/UseContext'

export const Data = createContext()

export default function App() {

  const [state, setState] = useState(true)

  const handleToggle = () => {
    setState(A => A == false)
  }

  return (
    <>
    <Data.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseState/>
    </Data.Provider>
    <UseContext/>   
    </>
  )
}
