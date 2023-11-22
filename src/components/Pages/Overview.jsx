import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';

function Overview() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='w-screen min-h-screen flex justify-center items-center bg-tan'>
            </div>
        </>
    )
}

export default Overview