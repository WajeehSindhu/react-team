import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App
