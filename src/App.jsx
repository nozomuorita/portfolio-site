import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <Header />
        <HomePage />
      </div>
  )
}

export default App
