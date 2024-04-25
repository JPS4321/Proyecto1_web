import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Header/>
          <Navbar/>
          <Body/>
    </div>
  )
}

export default App
