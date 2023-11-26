import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';
import Highlights from '../Overview/Highlights';
import RatingHistory from '../Overview/RatingHistory';
import Todo from '../Overview/Todo';

function Overview() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='w-screen min-h-screen flex flex-col items-center bg-tan gap-12 overflow-scroll py-32'>
                <Highlights />
                <RatingHistory />
                <Todo />
            </div>
        </>
    )
}

export default Overview