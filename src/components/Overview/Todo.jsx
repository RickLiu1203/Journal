import React from 'react'

function Todo() {
    return (
        <article className='flex flex-col rounded-xl border-2 border-black p-5 h-96 bg-ltan shadow-mdcard w-2/3 gap-4'>
            <h1 className='text-xl font-semibold'>My To-do List</h1>
            <section className='border-black border-y-4 overflow-scroll h-full'>
                <ul className='list-inside font-light'>
                    <li className='text-lg px-3 border-b-2 border-black py-2 select-none hover:line-through decoration-2'>
                        Get Groceries
                        <p className='text-xs font-semibold'>11/23/2023</p>
                    </li>
                    <li className='text-lg px-3 border-b-2 border-black py-2 select-none hover:line-through decoration-2'>Get Groceries</li>
                    <li className='text-lg px-3 border-b-2 border-black py-2 select-none hover:line-through decoration-2'>Get Groceries</li>
                </ul>
                <button className='ps-3 flex font-light text-lg py-2 w-full border-[3px] border-dashed border-gray-600 my-2 hover:font-semibold hover:border-black'>
                    Add Item +
                </button>
            </section>
        </article>
    )
}

export default Todo