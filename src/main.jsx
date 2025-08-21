import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx' 
import DotGrid from './components/DotGrid.jsx'


import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <div style={{ width: '100%', position: 'relative' }}>
      {/* DotGrid sebagai background */}
      <DotGrid
        dotSize={3}
        gap={15}
        baseColor="#18181B"
        activeColor="#5227FF"
        proximity={400}
        shockRadius={100}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{
          position: 'fixed',  // tetap di background saat scroll
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,          // pastikan di bawah komponen lain
        }}
      />

      {/* Komponen lainnya */}
      <PreLoader />
      <Navbar />
      <App className="relative z-10" />
      <Footer />
    </div>

    
    
    
    
  </StrictMode>,
)
