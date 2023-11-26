import React from 'react'

function Legendlabel(props) {
    return (
        <div className='flex gap-1 items-center'>
            <div className={`w-4 h-4 rounded-[0.25rem] ${props.color} border-2 border-black`}>
            </div>
            <p>-{props.tag}&#8239;({props.num})</p>
        </div>
    )
}

export default Legendlabel