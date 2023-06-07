import React from 'react'
import LoginSide from './components/LoginSide.jsx'
import CreativeSidebar from './components/CreativeSidebar.jsx'

function App() {
  
  return (
    <>
      <main className="bg-[#fff] lg:flex">
        <div className="md:w-[100%] w-full lg:w-[60%]">
          <LoginSide/>
        </div>
        <CreativeSidebar/>
      </main>
    </>
  )
}

export default App
