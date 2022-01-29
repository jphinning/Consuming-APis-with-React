import React from 'react'
import IndexPage from './components/indexPage'
import DollarAPI from './components/DolarRealAPI'
import ToggleDarkMode from './components/ToggleDarkMode'



function App() {

  return (
    <>
      <ToggleDarkMode/>
      <IndexPage />
      <DollarAPI />
    </>
  )
}

export default App
