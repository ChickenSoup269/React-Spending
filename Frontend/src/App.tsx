// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '~/pages/Home/home'
import Navbar from '~/components/layout/Navbar/navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Các trang khác sẽ được thêm tại đây */}
      </Routes>
    </Router>
  )
}

export default App
