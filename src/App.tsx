import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LinkHeader from './LinkHeader'
import NewCards from './NewCards'
import NewsLetter from './NewsLetter'
import Footer from './footer'
import './App.css'

function App() {

  return (
    <>
      <LinkHeader />
      <NewCards />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
