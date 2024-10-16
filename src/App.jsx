import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/Sidebar'

function App() {
  

  return (
      <div>
       <Main></Main>
       <SideBar></SideBar>
       <Footer></Footer>
    </div>
  )
}

export default App
