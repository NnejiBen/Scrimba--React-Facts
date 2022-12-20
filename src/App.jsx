import { useState } from 'react'
import './App.css'

function App() {
  return (

    <div className="App">
      <nav className="nav-bar">
        <img src="https://i.postimg.cc/wMJLJyvG/reactjs-icon.png" alt="React Logo" className='react-logo' />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
      <section className="facts-section">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </section>
    </div>
  )
}

export default App
