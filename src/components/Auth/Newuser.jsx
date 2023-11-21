import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {updateProfile} from 'firebase/auth'

function Newuser() {
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const updateProfile = async (name) => {
        try {
          await updateProfile(auth.currentUser, { name });
        } catch (error) {
          console.error('Error during profile update:', error.message);
        }
      };

    const back = () => {
        setTimeout(function() {
            navigate('/signup')
          }, 100);
    }

    return (
        <article className='flex justify-center items-center bg-tan w-screen min-h-screen py-10'>
            <div className='flex flex-col relative justify-between w-5/6 h-[50vh] min-h-[500px] bg-white shadow-bigcard rounded-xl border-black border-2 p-12'>
            <button onClick={back} className='absolute w-12 h-12 rounded-full bg-red-500 text-white font-bold text-xl -right-5 -top-5 border-black border-2 shadow-close active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'>X</button>
                <h1 className='font-bold text-2xl'>First, Let's Get to Know You!</h1>
                <div className='flex items-center justify-between w-full h-3/4'>
                    <div className='flex flex-col h-5/6 w-2/3 pe-12 gap-10'>
                        <input placeholder='Display Name'
                            onChange={(e) => setName(e.target.value)} 
                            className = 'h-1/6 w-full border-b-[3px] border-black placeholder-black font-bold focus:outline-none'
                        />
                        <input placeholder='Fuck'
                            onChange={(e) => setName(e.target.value)} 
                            className = 'h-1/6 w-full border-b-[3px] border-black placeholder-black font-bold focus:outline-none'
                        />
                        <input placeholder='Fuck'
                            onChange={(e) => setName(e.target.value)} 
                            className = 'h-1/6 w-full border-b-[3px] border-black placeholder-black font-bold focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col items-center h-5/6 w-1/3 gap-2'>
                        <button className='flex justify-center items-center h-5/6 w-full border-black border-[3px] rounded-xl'>
                            <h1 className='text-4xl font-bold'>+</h1>
                        </button>
                        <h2 className='font-bold'>Upload Photo (Optional)</h2>
                    </div>
                </div>

                <button className='bg-black py-3 px-5 rounded-xl text-white font-bold hover:bg-gray-800'>Ready to Go!</button>
            </div>
        </article>
    )
}

export default Newuser