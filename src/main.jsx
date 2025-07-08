import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'  
import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <PreLoader/>
    <Navbar/>
    <App className="relative z-0"/>
    <Footer/>
    
    
  </StrictMode>,
)
