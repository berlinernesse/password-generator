import React, { useState } from 'react'
import './App.css'
import Footer from "./Components/Footer"
import PasswordDisplay from "./Components/PasswordDisplay"
import PasswordGenerator from "./Components/PasswordGenerator"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <PasswordDisplay />
        <PasswordGenerator />
        <Footer />
      </div>  
    </>
  )
}

export default App
