import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Header from './components/Header'
import travelData from './data/travelData'
// import './App.css'

function App() {
  const cardElements = travelData.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })


  return (
    <>
      <Header />
      <Card />
    </>
  )
}

export default App
