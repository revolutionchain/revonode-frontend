import React from 'react';


export default function Secondpage({currentPage, setCurrentPage}) {
    

    return (
        <div className=''>
            <h2> TITLE!</h2>
            <h3> Description text!</h3>
            <div>

            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>
        
        </div>
    )
}
