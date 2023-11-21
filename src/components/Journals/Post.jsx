import {useState, useEffect} from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

function Post() {
    const [star, setStar] = useState(false);
    const [hoverTag, setHoverTag] = useState(false);

    const starred = () => {
        setStar(!star);
    }

    return (
        <div className='flex gap-8 flex-wrap p-20'>
            <div className='flex flex-col justify-center bg-ltan h-72 w-56 rounded-xl border-black border-2 shadow-mdcard p-6 pb-5 gap-1'>
                <div className='flex items-center justify-between border-black border-b-2  pb-1 mb-1'>
                    <h1 className='text-xl font-bold'>Nov 16, 2023</h1>
                    <button onClick={starred}>{star ? <FaStar size={20} color={'#f59e0b'}/> : <FaRegStar size={20}/>}</button>
                </div>
                {/* <h2 className='font-semibold text-sm'>Subtitle, Subtitle</h2> */}
                <p className='h-auto text-sm line-clamp-[8] text-ellipsis underline underline-offset-4 select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis, quisquam qui excepturi magni possimus asperiores? Beatae voluptate qui praesentium alias molestias excepturi quia, modi, ut quisquam at aliquam cupiditate.</p>
                <div className='flex h-1/12 pt-2 justify-between'>
                    <div className='flex flex-col relative'>
                        <div className='text-xs font-semibold flex bg-gray-100 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]' onMouseOver={() => setHoverTag(true)} onMouseOut={() => setHoverTag(false)}>3 Tags</div>
                        {hoverTag && 
                            <div className='absolute w-60 top-6 bg-amber-50 rounded-lg border-black border-2 shadow-mdcard p-2'>
                                <h2 className='text-sm font-bold mb-2 border-black border-b-2'>Tags</h2>
                                <div className='flex gap-[6px] flex-wrap '>
                                    <div className='text-xs font-semibold flex bg-purple-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>3 Tags</div>
                                    <div className='text-xs font-semibold flex bg-blue-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Fuckkkkkk</div>
                                    <div className='text-xs font-semibold flex bg-red-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Yuh</div>
                                </div>
                            </div>                           
                        }
                    </div>                   
                    <div className='flex items-center gap-1'>
                        <p className='text-xs font-bold'>Okay</p>
                        <div className='w-5 h-5 bg-amber-400 border-black border-[1.5px] rounded-md'>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-center bg-ltan h-72 w-56 rounded-xl border-black border-2 shadow-mdcard p-6 pb-5 gap-1'>
                <div className='flex items-center justify-between border-black border-b-2  pb-1 mb-1'>
                    <h1 className='text-xl font-bold'>Nov 16, 2023</h1>
                    <button onClick={starred}>{star ? <FaStar size={20} color={'#f59e0b'}/> : <FaRegStar size={20}/>}</button>
                </div>
                {/* <h2 className='font-semibold text-sm'>Subtitle, Subtitle</h2> */}
                <p className='h-auto text-sm line-clamp-[8] text-ellipsis underline underline-offset-4 select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis, quisquam qui excepturi magni possimus asperiores? Beatae voluptate qui praesentium alias molestias excepturi quia, modi, ut quisquam at aliquam cupiditate.</p>
                <div className='flex h-1/12 pt-2 justify-between'>
                    <div className='flex flex-col relative'>
                        <div className='text-xs font-semibold flex bg-gray-100 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]' onMouseOver={() => setHoverTag(true)} onMouseOut={() => setHoverTag(false)}>3 Tags</div>
                        {hoverTag && 
                            <div className='absolute w-60 top-6 bg-amber-50 rounded-lg border-black border-2 shadow-mdcard p-2'>
                                <h2 className='text-sm font-bold mb-2 border-black border-b-2'>Tags</h2>
                                <div className='flex gap-[6px] flex-wrap '>
                                    <div className='text-xs font-semibold flex bg-purple-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>3 Tags</div>
                                    <div className='text-xs font-semibold flex bg-blue-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Fuckkkkkk</div>
                                    <div className='text-xs font-semibold flex bg-red-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Yuh</div>
                                </div>
                            </div>                           
                        }
                    </div>                   
                    <div className='flex items-center gap-1'>
                        <p className='text-xs font-bold'>Okay</p>
                        <div className='w-5 h-5 bg-amber-400 border-black border-[1.5px] rounded-md'>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-center bg-ltan h-72 w-56 rounded-xl border-black border-2 shadow-mdcard p-6 pb-5 gap-1'>
                <div className='flex items-center justify-between border-black border-b-2  pb-1 mb-1'>
                    <h1 className='text-xl font-bold'>Nov 16, 2023</h1>
                    <button onClick={starred}>{star ? <FaStar size={20} color={'#f59e0b'}/> : <FaRegStar size={20}/>}</button>
                </div>
                {/* <h2 className='font-semibold text-sm'>Subtitle, Subtitle</h2> */}
                <p className='h-auto text-sm line-clamp-[8] text-ellipsis underline underline-offset-4 select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis, quisquam qui excepturi magni possimus asperiores? Beatae voluptate qui praesentium alias molestias excepturi quia, modi, ut quisquam at aliquam cupiditate.</p>
                <div className='flex h-1/12 pt-2 justify-between'>
                    <div className='flex flex-col relative'>
                        <div className='text-xs font-semibold flex bg-gray-100 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]' onMouseOver={() => setHoverTag(true)} onMouseOut={() => setHoverTag(false)}>3 Tags</div>
                        {hoverTag && 
                            <div className='absolute w-60 top-6 bg-amber-50 rounded-lg border-black border-2 shadow-mdcard p-2'>
                                <h2 className='text-sm font-bold mb-2 border-black border-b-2'>Tags</h2>
                                <div className='flex gap-[6px] flex-wrap '>
                                    <div className='text-xs font-semibold flex bg-purple-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>3 Tags</div>
                                    <div className='text-xs font-semibold flex bg-blue-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Fuckkkkkk</div>
                                    <div className='text-xs font-semibold flex bg-red-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Yuh</div>
                                </div>
                            </div>                           
                        }
                    </div>                   
                    <div className='flex items-center gap-1'>
                        <p className='text-xs font-bold'>Okay</p>
                        <div className='w-5 h-5 bg-amber-400 border-black border-[1.5px] rounded-md'>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-center bg-ltan h-72 w-56 rounded-xl border-black border-2 shadow-mdcard p-6 pb-5 gap-1'>
                <div className='flex items-center justify-between border-black border-b-2  pb-1 mb-1'>
                    <h1 className='text-xl font-bold'>Nov 16, 2023</h1>
                    <button onClick={starred}>{star ? <FaStar size={20} color={'#f59e0b'}/> : <FaRegStar size={20}/>}</button>
                </div>
                {/* <h2 className='font-semibold text-sm'>Subtitle, Subtitle</h2> */}
                <p className='h-auto text-sm line-clamp-[8] text-ellipsis underline underline-offset-4 select-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis, quisquam qui excepturi magni possimus asperiores? Beatae voluptate qui praesentium alias molestias excepturi quia, modi, ut quisquam at aliquam cupiditate.</p>
                <div className='flex h-1/12 pt-2 justify-between'>
                    <div className='flex flex-col relative'>
                        <div className='text-xs font-semibold flex bg-gray-100 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]' onMouseOver={() => setHoverTag(true)} onMouseOut={() => setHoverTag(false)}>3 Tags</div>
                        {hoverTag && 
                            <div className='absolute w-60 top-6 bg-amber-50 rounded-lg border-black border-2 shadow-mdcard p-2'>
                                <h2 className='text-sm font-bold mb-2 border-black border-b-2'>Tags</h2>
                                <div className='flex gap-[6px] flex-wrap '>
                                    <div className='text-xs font-semibold flex bg-purple-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>3 Tags</div>
                                    <div className='text-xs font-semibold flex bg-blue-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Fuckkkkkk</div>
                                    <div className='text-xs font-semibold flex bg-red-200 rounded-xl border-black border-[1.5px] px-2 select-none pb-[1px]'>Yuh</div>
                                </div>
                            </div>                           
                        }
                    </div>                   
                    <div className='flex items-center gap-1'>
                        <p className='text-xs font-bold'>Okay</p>
                        <div className='w-5 h-5 bg-amber-400 border-black border-[1.5px] rounded-md'>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Post