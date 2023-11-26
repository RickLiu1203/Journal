import {useState, useEffect} from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

function Focused(props) {
    const [star, setStar] = useState(false);

    const starred = () => {
        setStar(!star);
    }

    return (
        <>
            <div className='flex justify-center items-center bg-black h-screen w-screen z-50 bg-opacity-50 py-24 px-36 overflow-none fixed'>
                <div className='flex flex-col relative bg-ltan opacity-100 w-full h-full rounded-3xl border-2 border-black px-8 py-6 shadow-bigcard'>
                    <button onClick={props.click} className='absolute w-12 h-12 rounded-full bg-red-500 text-white font-bold text-xl -right-6 -top-5 border-black border-2 shadow-close active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'>X</button>
                <div className='flex items-center justify-between border-black border-b-4 pb-2 bg-ltan pe-1'>
                    <h1 className='text-[28px] font-extrabold'>November 21, 2023</h1>
                    <button onClick={starred}>{star ? <FaStar size={34} color={'#f59e0b'}/> : <FaRegStar size={34}/>}</button>
                </div>
                    <article className='overflow-scroll no-scrollbar'>
                        <section className='flex flex-col border-black border-b-4 pb-4 pt-4'>
                            <h2 className='text-xl font-bold'>Daily Journal</h2>
                            <h3 className='text-lg font-normal'>This is a cool subtitle</h3>
                            <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quia, impedit dolores molestiae corrupti rerum assumenda mollitia aperiam et aliquam dolore voluptatum itaque distinctio repudiandae nesciunt ea natus atque repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel dolorum fuga totam exercitationem officia facere. A doloremque cum veritatis deserunt placeat voluptatem error laborum ad! <br/><br/>Deserunt saepe maxime adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae commodi accusamus esse atque quibusdam a eveniet, molestias suscipit totam voluptatibus maiores, officia eaque quo quis eos magni hic! Quaerat?</p>
                        </section>
                        <section className='flex gap-1 flex-col border-black border-b-4 py-4 overflow-x-scroll'>
                            <h2 className='text-xl font-bold'>Pictures</h2>
                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center justify-center h-48 w-44 border-black border-2 rounded-xl'>
                                    picture
                                </div>
                                <div className='flex items-center justify-center h-48 w-44 border-black border-2 rounded-xl'>
                                    picture
                                </div>
                                <div className='flex items-center justify-center h-48 w-44 border-black border-2 rounded-xl'>
                                    picture
                                </div>
                            </div>
                        </section>
                        <section className='flex flex-col border-black border-b-4 py-4'>
                            <h2 className='text-xl font-bold'>Highlights</h2>
                            <ul className='list-disc list-inside font-bold'>
                                <li className='font-light py-2 border-black border-b-2'>I saw bird</li>
                                <li className='font-light py-2 border-black border-b-2'>I went to gym</li>
                                <li className='font-light py-2'>I got a gift from my friend</li>
                            </ul>
                        </section>
                        <section className='flex gap-1 flex-col border-black border-b-4 py-4'>
                            <h2 className='text-xl font-bold'>Goals/Todo</h2>
                            <ul className='list-disc list-inside font-bold'>
                                <li className='font-light py-2 border-black border-b-2'>Hit legs tmr</li>
                                <li className='font-light py-2 border-black border-b-2'>Finish hw</li>
                                <li className='font-light py-2'>Wake up before 11</li>
                            </ul>
                        </section>
                        <section className='flex gap-1 flex-col border-black border-b-4 py-4'>
                            <h2 className='text-xl font-bold'>Rating</h2>
                            <div className='flex gap-2 items-center'>
                                <div className='w-7 h-7 border-black border-2 rounded-md bg-lime-500'></div>
                                <h2 className='text-xl font-medium'>Good</h2>
                            </div>
                        </section>
                        <section className='flex gap-1 flex-col border-black border-b-4 py-4'>
                            <h2 className='text-xl font-bold'>Tags</h2>
                            <div className='flex gap-3 items-center font-medium'>
                                <div className='border-black border-2 rounded-full px-2'>Study</div>
                                <div className='border-black border-2 rounded-full px-2'>The Boys</div>
                                <div className='border-black border-2 rounded-full px-2'>Girlfriend</div>
                            </div>
                        </section>
                    </article>

                </div>
            </div>
        </>
    )
}

export default Focused