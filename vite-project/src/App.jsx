import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>plus</button>
    <button onClick={()=>{setCount(count-1)}}>minus</button>
    </>
  )
}

export default App
