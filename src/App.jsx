import { useState , useRef , useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Components from './components/Components.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
const [isSidebarOpen , setSidebarOpen] = useState(false)
const videoRef = useRef(null)
const [isOverVideo, setIsOverVideo] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      const videoRect = videoRef.current?.getBoundingClientRect();
      const navbarHeight = 64; // or document.querySelector('nav').offsetHeight
      const earlyOffset = 100;

      // Detect if navbar (top of screen) is within video bounds
      if (videoRect && videoRect.top <= earlyOffset  && videoRect.bottom >= navbarHeight) {
        setIsOverVideo(true);
      } else {
        setIsOverVideo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Navbar sidebarOpen= {()=>setSidebarOpen(!isSidebarOpen)} isOverVideo={isOverVideo}/>
      <Sidebar isOpen={isSidebarOpen} closeDrawer={()=>setSidebarOpen(false)} />

      <div className='content-wrapper'>
        <Routes>
          <Route path="/" element={<Home ref={videoRef}/>} />
          <Route path="/components" element={<Components />} />
          {/* other routes */}
        </Routes>
      </div>
    </>
  )
}

export default App
