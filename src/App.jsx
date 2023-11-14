import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Entries from './components/Entries'
import Landing from './components/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
  )
}

export default App
