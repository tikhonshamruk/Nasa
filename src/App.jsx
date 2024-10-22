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
      <div className="main_div">
        <div className='wrapper'>
        <Main></Main>
       {count &&
       <SideBar close={close} setCount={setCount} count={count}></SideBar>}
        </div>
       <Footer close={close} setCount={setCount} count={count}></Footer>
    </div>
  )
}

export default App
