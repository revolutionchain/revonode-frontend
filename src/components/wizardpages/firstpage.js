import React from 'react';


export default function Firstpage({currentPage, setCurrentPage}) {

    return (
        <div className=''>
            <h2> Welcome text!</h2>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>
        
        </div>
    )
}
