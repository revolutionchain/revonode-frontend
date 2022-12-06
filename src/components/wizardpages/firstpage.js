import React from 'react';


export default function Firstpage({ currentPage, setCurrentPage }) {


    return (
        <div className='first-page-div'>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Welcome Early Adopter!</h2>
                <h3>As already described this is an experimental and continuously updated software, which needs all the possible support from the community. Revo aims to be a public, decentralized and open source ecosystem, so from now on we will guide you step by step in installing your first REVO blockchain node.</h3>
            </div>


            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>

                </div>

                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Next</button>
                </div>
            </div>


        </div>
    )
}
