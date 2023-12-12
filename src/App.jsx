import { useState } from 'react'
import './App.css'
import OurProducts from './components/OurProducts'
import BasketProducts from './components/BasketProducts'

function App() {
  return (
    <>
      <BasketProducts />
      <OurProducts />
    </>
  )
}

export default App
