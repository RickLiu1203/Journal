import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Entries from './components/Entries'
import Landing from './components/Landing';
import Blog from './components/Blog';
import Newuser from './components/Auth/Newuser';
import Overview from './components/Pages/Overview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/newuser" element={<Newuser />}/>
        <Route path="/overview" element={<Overview />}/>
      </Routes>
    </Router>
  )
}

export default App
