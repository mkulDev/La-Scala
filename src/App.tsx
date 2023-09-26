import Navbar from './components/Navbar'
import About from './pages/About'
import Start from './pages/Start'
import Menu from './pages/Menu'

import { useEffect, useState } from 'react'
import Contact from './pages/Contact'

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true))
  }, [])

  if (!fontsLoaded) return null
  return (
    <>
      <Navbar />
      <Start />
      <About />
      <Menu />
      <Contact />
    </>
  )
}

export default App
