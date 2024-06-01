import { useState } from 'react'
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
