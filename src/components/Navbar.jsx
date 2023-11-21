import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../config/firebase-config'
import {signOut} from 'firebase/auth'

function Navbar() {
    const navigate = useNavigate();

    const logOut = async () => {
        try{
            await signOut(auth)
            navigate('/')
        } catch(err){
            console.error(err.message)
        }
    }

    return (
        <div className='flex w-screen justify-between px-10 py-6'>
            <h1>Name</h1>
            <nav className='flex gap-4'>
                <Link>Overview</Link>
                <Link>Journals</Link>
            </nav>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default Navbar