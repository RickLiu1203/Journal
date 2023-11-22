import {useState} from 'react'
import Focused from '../Journals/Focused';
import Post from '../Journals/Post'
import Navbar from '../Navbar'

function Journals() {
    const [clicked, setClicked] = useState(false);

    const click = () => {
        if (event.currentTarget !== event.target){
            setClicked(!clicked);
        }

    }

    return (
        <>
            <Navbar />
            <div className='w-screen min-h-screen flex justify-center items-center bg-tan'>
                {clicked && <Focused click={click}/>}
                <Post click={click}/>
            </div>
        </>
    )
}

export default Journals