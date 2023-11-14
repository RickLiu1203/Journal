import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <h1 className='font-bold text-4xl'>Rick's Journal App</h1>
        <nav className='flex gap-2 text-xl'>
            <Link to="/signin">Login or Register</Link>
        </nav>
    </div>
  )
}

export default Landing