import React, { useEffect, useState } from 'react';


export default function Secondpage({currentPage, setCurrentPage, drivesData}) {

    const [ selectedDrives, setSelectedDrives ] = useState([]);
    const [ updateStates, setUpdatesStates ] = useState(false);
    const [ checkedState, setCheckedState ] = useState([]);

    useEffect(() => {
        let ssdCount = drivesData.filter(e => e.NAME.includes("sd")).map(e => 0);
        setCheckedState(ssdCount);
    }, [])

    function handleCheckbox(elem, position) {
        let newArr = checkedState.map((e,i) => {
            if(((e == 1 || e == 2) && position == i) || e == 0 && position !== i){
                return 0;
            }else if(e == 1 && checkedState[position] !== 2 && i !== position){
                return 2;
            }else if(e == 1 && checkedState[position] == 2 && i !== position){
                return 1;
            }else if(e == 2  && checkedState[position] == 1 && i !== position){
                return 1;
            }else if(e !== 1 && i == position){
                return 1;
            }
        });
        setCheckedState(newArr);
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
                    drivesData.filter(e => e.NAME.includes("sd")).reverse().map((e,i) => {
                        return <div key={e.NAME}>
                            <input type="checkbox" checked={checkedState[i]} onClick={() => handleCheckbox(e,i)}></input>
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
