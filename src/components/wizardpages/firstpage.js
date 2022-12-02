import React from 'react';


export default function Firstpage({ currentPage, setCurrentPage }) {


    return (
        <div className='first-page-div'>
            <h2> Welcome text!</h2>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Next</button>

        </div>
    )
}
