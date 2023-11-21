import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';
import Createpost from '../Journals/Createpost';
import Post from '../Journals/Post';

function Overview() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='w-screen min-h-screen flex justify-center items-center bg-tan'>
                <Post />
            </div>
        </>
    )
}

export default Overview