import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Item from "./Components/Item/Item";
import './App.css'
import VarietyTab from './Components/VarietyTab/VarietyTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <VarietyTab />
      <About />
      <Item />

    </>
  )
}

export default App