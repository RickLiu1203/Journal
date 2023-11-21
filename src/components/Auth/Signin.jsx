import {useState} from 'react'
import {auth, googleProvider} from '../../config/firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , signInWithPopup, signOut} from 'firebase/auth'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [failure, setFailure] = useState(false);

    const navigate = useNavigate();

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/overview')
        } catch (err ) {
            setFailure(true);
        }
    
    };

    const googleSignIn = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
            navigate('/overview')
        } catch (err) {
            console.log('error');
        }
    }

    const back = () => {
        setTimeout(function() {
            navigate('/')
          }, 100);
    }

    return (
        <article className='flex w-screen min-h-screen justify-center items-center py-10 bg-tan overflow-scroll'>
            <div className='flex relative flex-col p-10 items-center min-h-[550px] h-[65vh] xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-2/3 w-5/6 gap-4 border-black border-2 rounded-xl shadow-bigcard bg-stone-50 overflow-visible'>
                <button onClick={back} className='absolute w-12 h-12 rounded-full bg-red-500 text-white font-bold text-xl -right-5 -top-5 border-black border-2 shadow-close active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'>X</button>
                <h1 className='self-start font-bold text-2xl'>Sign In</h1>
                <div className='flex flex-col items-center w-full gap-4'>
                    <input 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='h-12 w-full rounded-md border-black focus:outline-none border-2 placeholder-gray-500 px-3 bg-stone-50'
                    />
                    <input 
                        placeholder='Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='h-12 w-full rounded-md border-black focus:outline-none border-2 placeholder-gray-500 px-3 bg-stone-50'
                    />
                    {failure && <p className='text-red-600'>Incorrect username or password</p>}
                    <button onClick={signIn} 
                            className='bg-black text-white h-12 w-full rounded-md hover:bg-gray-800'
                    >
                        Sign In
                    </button>
                </div>
                <nav className='flex w-full justify-between underline'>
                    <Link>Forgot Password?</Link>
                    <Link to='/signup'>Sign Up</Link>
                </nav>
                <p className='text-gray-500'>or sign in with</p>
                <button onClick={googleSignIn} className='flex text-2xl rounded-full w-11 h-11 border-black border-2 justify-center items-center shadow-google active:shadow-none active:translate-x-[2.5px] active:translate-y-[2.5px]'><FaGoogle /></button>
            </div>
        </article>
    )
}

export default Signin