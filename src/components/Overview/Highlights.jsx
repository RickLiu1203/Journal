import { useState, useEffect } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";


function Highlights() {
    const [dropdown, setDropdown] = useState(false);
    const [dateRange, setDateRange] = useState(14);

    const selectRange = (selection) => {
        setDateRange(selection);
        setDropdown(false);
    }
    

    return (
        <article className='flex flex-col justify-between rounded-xl border-2 border-black p-5 h-64 bg-ltan shadow-mdcard w-[66%]'>
            <div className='flex text-xl font-semibold items-center justify-between gap-2'>
                <h1 className='flex items-center h-8'>A Highlight From the Last&#8239;...</h1>
                <div className='relative z-40'>
                    <button onClick={() => {setDropdown(!dropdown)}} 
                            className='flex items-center justify-between h-9 border-2 border-black rounded-xl bg-slate-50 px-2 select-none w-40 z-40'> 
                            {dateRange} Days&nbsp;{dropdown ? <FaAngleUp size={24}/> : <FaAngleDown size={24}/>}
                    </button>
                    {dropdown && 
                    <div className='absolute w-full bg-slate-50 px-2 mt-1 border-black border-2 rounded-xl'>
                        <ul className='font-normal'>
                            <li className={`${dateRange == 14 && 'font-semibold'} border-b-2 border-black hover:font-semibold`}>
                                <button onClick={() => selectRange(14)} className='flex w-full h-full py-[2px]'>14 Days</button>
                            </li>
                            <li className={`${dateRange == 30 && 'font-semibold'} border-b-2 border-black hover:font-semibold`}>
                                <button onClick={() => selectRange(30)} className='flex w-full h-full py-[2px]'>30 Days</button>
                            </li>
                            <li className={`${dateRange == 90 && 'font-semibold'} border-b-2 border-black hover:font-semibold`}>
                                <button onClick={() => selectRange(90)} className='flex w-full h-full py-[2px]'>90 Days</button>
                            </li>
                            <li className={`${dateRange == 365 && 'font-semibold'} hover:font-semibold`}>
                                <button onClick={() => selectRange(365)} className='flex w-full h-full py-[2px]'>365 Days</button>
                            </li>
                        </ul>
                    </div>   
                    }
                </div>
            </div>
            <div className=''>
                <h2 className='text-lg font-light'>I visited Lilian today :D</h2>
            </div>
            <div className='flex items-center justify-between font-semibold'>
                <h2>November 23, 2023</h2>
                <button className='flex items-center gap-2 underline underline-offset-2'>See Journal Entry <RiNewspaperLine size={18}/></button>
            </div>

        </article>
    )
}

export default Highlights