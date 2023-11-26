import React from 'react';

function Graphbar(props) {
    return (
        <div className='flex flex-wrap gap-[0.5px]'>
            {Array(props.length).fill(null).map((_, i) => (
                <div key={i} className={`w-6 h-6 ${props.color} rounded-[0.25rem] border-2 border-black`}></div>
            ))}
        </div>
    );
}

export default Graphbar;
