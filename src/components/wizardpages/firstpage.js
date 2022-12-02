import React from 'react';


export default function Firstpage({ currentPage, setCurrentPage }) {
    const options = [
        { value: '0', label: 'Raid 0' },
        { value: '1', label: 'Raid 1' },
    ]


    return (
        <div className='first-page-div'>
            <h2> Welcome text!</h2>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>

        </div>
    )
}
