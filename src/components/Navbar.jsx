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
        <div className='fixed flex w-screen justify-between gap-10 px-10 py-6 bg-ltan z-40 border-b-2 border-black'>
            <h1 className='font-bold text-2xl w-1/4 items-center truncate'>Rickdsassssdsadsadas</h1>
            <nav className='flex justify-center gap-4 w-1/2 items-center'>
                <Link className='underline text-lg font-bold underline-offset-4 decoration-2' to='/overview'>Overview</Link>
                <Link className='underline text-lg font-bold underline-offset-4 decoration-2' to='/journals'>Journals</Link>
            </nav>
            <button onClick={logOut} className="w-1/4 flex justify-end items-center font-bold text-lg underline underline-offset-4 decoration-2">Sign Out</button>
        </div>
    )
}

export default Navbar