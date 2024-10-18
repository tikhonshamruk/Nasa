import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/Sidebar'

function App() {
  
  const [count,setCount] = useState(true)

  function close(){
    setCount(!count)
  }

  return (
      <div>
       <Main></Main>
       {count &&
       <SideBar close={close} setCount={setCount} count={count}></SideBar>}
       <Footer close={close} setCount={setCount} count={count}></Footer>
    </div>
  )
}

export default App
