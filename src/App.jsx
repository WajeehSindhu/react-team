import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div>
   <CustomCursor/>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App
