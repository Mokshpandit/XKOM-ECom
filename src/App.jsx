import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Components from './components/Components.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
const [isSidebarOpen , setSidebarOpen] = useState(false)
  return (
    <>
      <Header />
      <Navbar sidebarOpen= {()=>setSidebarOpen(!isSidebarOpen)}/>
      <Sidebar isOpen={isSidebarOpen} closeDrawer={()=>setSidebarOpen(false)} />

      <div className='content-wrapper px-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          {/* other routes */}
        </Routes>
      </div>
    </>
  )
}

export default App
