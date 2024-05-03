import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
=======
import './HomePage.css'
>>>>>>> PRUEBA-TALVEZ
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <div>
          <Header/>
          <Navbar/>
          <Body/>
    </div>
=======
    <div className="HomePage-container">
         <Header />
         <Navbar />
         <Body />
      </div>
>>>>>>> PRUEBA-TALVEZ
  )
}

export default HomePage
