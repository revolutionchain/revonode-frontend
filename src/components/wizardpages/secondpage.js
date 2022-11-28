import React, { useState } from 'react';


export default function Secondpage({currentPage, setCurrentPage, drivesData}) {

    const [ selectedDrives, setSelectedDrives ] = useState([]);
    const [ updateStates, setUpdatesStates ] = useState(false)

    function handleCheckbox(elem) {
        if(selectedDrives.length < 2){
            setSelectedDrives([selectedDrives[0], elem]);
            updateStates ? setUpdatesStates(false) : setUpdatesStates(true);
        }else {
            setSelectedDrives([selectedDrives[1], elem]);
            updateStates ? setUpdatesStates(false) : setUpdatesStates(true);
        }
    }


    return (
        <div className=''>
            <h2> TITLE!</h2>
            <h3> Description text!</h3>
            <div>
                {
                    drivesData.filter(e => e.NAME.includes("sd")).map(e => {
                        return <div>
                            <input type="checkbox" onClick={() => handleCheckbox(e)}></input>
                            <span>{e.NAME}</span>
                            <span>{((parseFloat(e.SIZE))/1000000000).toFixed(2) + ' gb'}</span>
                        </div>
                    })
                }
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>
        
        </div>
    )
}
