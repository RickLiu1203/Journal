import { useEffect } from 'react';
import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Graphbar from './Ratings/Graphbar';
import Legendlabel from './Ratings/Legendlabel';

function RatingHistory() {
    const [calendar, setCalendar] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [dateRange, setDateRange] = useState(30);
    const [testlengths, setTestLengths] = useState([0,0,0,0,0,0,0]);

    const testcolors = ['bg-[#dc2626]', 'bg-[#FF4E11]', 'bg-[#FF8E15]', 'bg-[#FAB733]', 'bg-[#ACB334]', 'bg-lime-600', 'bg-green-600', 'bg-[#ACB334]', 'bg-lime-600', 'bg-green-600', 'bg-[#ACB334]', 'bg-lime-600', 'bg-green-600'];
    const tags = ['Awful', 'Bad', 'Subpar', 'Okay', 'Good', 'Great', 'Amazing'];

    useEffect(() => {
        const updateTestLengths = () => {
            let i = dateRange;
            let counter = 0;
            const newTestLengths = Array(7).fill(0);
    
            while (i > 0 && counter < 6) {
                const randNum = Math.floor(Math.random() * (i/2)) + 1;
                newTestLengths[counter] = randNum;
                i -= randNum;
                counter += 1;
            }
    
            if (counter === 6) {
                newTestLengths[6] = i;
            }
    
            setTestLengths(newTestLengths);
        };
    
        updateTestLengths();
    }, [dateRange]);


    const selectRange = (selection) => {
        if(selection != dateRange){
            setDateRange(selection);
        }
        setDropdown(false);
    }

    return (
        <article  className='flex flex-wrap flex-col rounded-xl border-2 border-black p-5 w-2/3 bg-ltan shadow-mdcard gap-6'>
            <div className='flex text-xl font-semibold items-center justify-between gap-2'>
                <h1 className='flex items-center h-8'>Ratings from Your Last&#8239;...</h1>
                <div className='relative z-40'>
                    <button onClick={() => {setDropdown(!dropdown)}} 
                            className='flex items-center justify-between h-9 border-2 border-black rounded-xl bg-slate-50 px-2 select-none w-40 z-40'> 
                            {dateRange} Days&nbsp;{dropdown ? <FaAngleUp size={24}/> : <FaAngleDown size={24}/>}
                    </button>
                    {dropdown && 
                    <div className='absolute w-full bg-slate-50 px-2 mt-1 border-black border-2 rounded-xl'>
                        <ul className='font-normal'>
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
            {calendar &&
            <div className='flex gap-[0.5px] flex-wrap'>
                {Array.from({ length: dateRange }, (_, index) => (
                <div className={`w-6 h-6 ${testcolors[Math.floor(Math.random() * testcolors.length)]} rounded-[0.25rem] border-2 border-black`}>
                </div>
                ))}
            </div>
            }
            {!calendar &&
                <div className='flex flex-col gap-1'>
                    {testlengths.map((value, index) => (
                        <Graphbar length={value} color={testcolors[6 - index]}/>
                    ))}
                </div>
            }
            <div className='flex flex-wrap gap-2 text-sm'>
                {testlengths.map((value, index) => (
                   <Legendlabel tag={tags[6 - index]} num={value} color={testcolors[6 - index]} />
                ))}
            </div>
            <div className='relative overflow-hidden flex bg-slate-50 border-black border-2 rounded-3xl h-12 w-56 justify-between font-semibold shadow-close'>
                <div className={`bg-slate-500 absolute z-20 w-28 h-full rounded-3xl transition-transform duration-250 ease-out outline-black outline-2 outline ${!calendar && 'transform translate-x-[6.75rem] ease-out'}`}></div>
                <button onClick={() => setCalendar(true)} className={`z-30 px-4 rounded-3xl delay-[50ms] ${calendar &&  'text-white'}`}>Calendar</button>
                <button onClick={() => setCalendar(false)} className={`z-30 px-7 rounded-3xl delay-[50ms] ${!calendar && 'text-white'}`}>Graph</button>
            </div>
        </article>
    )
}

export default RatingHistory