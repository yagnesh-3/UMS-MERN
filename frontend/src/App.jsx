import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/Pages/Home'
import Timetable from './assets/Pages/Timetable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
