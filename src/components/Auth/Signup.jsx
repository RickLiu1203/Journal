import {useState, useEffect} from 'react'
import {auth, googleProvider} from '../../config/firebase-config'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [match, setMatch] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(email)
        console.log(password)
        console.log(confirm)
    }, [email,password,confirm])

    const signUp = async () => {
        try{
            if (password === confirm){
                await createUserWithEmailAndPassword(auth, email, password);
                navigate('/newuser')
            } else {
                setMatch(false)
            }
        } catch (err) {
            console.error(err.message)
        }
    };

    const googleSignUp = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
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
        <article className='flex w-screen min-h-screen justify-center py-10 items-center bg-tan overflow-scroll'>
            <div className='flex flex-col relative p-10 items-center min-h-[600px] h-[65vh] xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-2/3 w-5/6 gap-4 border-black border-2 rounded-xl shadow-bigcard bg-stone-50 overflow-visible'>
            <button onClick={back} className='absolute w-12 h-12 rounded-full bg-red-500 text-white font-bold text-xl -right-5 -top-5 border-black border-2 shadow-close active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'>X</button>
                <h1 className='self-start font-bold text-2xl'>Sign Up</h1>
                <div className='flex flex-col w-full gap-4'>
                    <input 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='h-12 rounded-md border-black focus:outline-none border-2 placeholder-gray-500 px-3 bg-stone-50'
                    />
                    <input 
                        placeholder='Enter Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='h-12 rounded-md border-black focus:outline-none border-2 placeholder-gray-500 px-3 bg-stone-50'
                    />
                    <input 
                        placeholder='Confirm Password'
                        type='password'
                        onChange={(e) => setConfirm(e.target.value)}
                        className='h-12 rounded-md border-black focus:outline-none border-2 placeholder-gray-500 px-3 bg-stone-50'
                    />
                    <button onClick={signUp} 
                            className='bg-black text-white h-12 rounded-md hover:bg-gray-800'
                    >
                        Sign Up
                    </button>
                </div>
                <nav className='flex justify-center w-full gap-2'>
                    <p className='text-gray-500'>Have an account?</p>
                    <Link to='/signin' className='underline'>Sign In</Link>
                </nav>
                <p className='text-gray-500'>or sign up with</p>
                <button onClick={googleSignUp} className='flex text-2xl rounded-full w-11 h-11 border-black border-2 justify-center items-center shadow-google active:shadow-none active:translate-x-[2.5px] active:translate-y-[2.5px]'><FaGoogle /></button>
            </div>
        </article>
    )
}

export default Signup