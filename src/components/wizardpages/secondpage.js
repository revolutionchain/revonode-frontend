import axios from 'axios';
import React, { useEffect, useState } from 'react';
const { REACT_APP_LOCAL_NODE_IP } = process.env;


export default function Secondpage({ currentPage, setCurrentPage, drivesData }) {

    const [selectedDrives, setSelectedDrives] = useState([]);
    const [updateStates, setUpdatesStates] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const [totalDrives, setTotalDrives] = useState([]);
    useEffect(() => {
        let drives = drivesData.filter(e => e.NAME.includes("sd")).reverse();
        let ssdCount = drives.map(e => 0);
        setCheckedState(ssdCount);
        setTotalDrives(drives);
    }, [])

    function handleCheckbox(elem, position) {
        let newArr = checkedState.map((e, i) => {
            if (((e == 1 || e == 2) && position == i) || (e == 0 && position !== i)) {
                return 0;
            } else if (e == 1 && checkedState[position] !== 2 && i !== position) {
                return 2;
            } else if (e == 1 && checkedState[position] == 2 && i !== position) {
                return 1;
            } else if (e == 2 && checkedState[position] == 1 && i !== position) {
                return 1;
            } else if (e !== 1 && i == position) {
                return 1;
            }
        });
        setCheckedState(newArr);
        let drives = [];
        newArr.map((e, i) => {
            if (e == 1) {
                drives[1] = totalDrives[i];
            } else if (e == 2) {
                drives[0] = totalDrives[i];
            }
        })
        if (!newArr.includes(2)) {
            drives[0] = null;
        }
        if (!newArr.includes(1)) {
            drives[1] = null;
        }
        setSelectedDrives(drives);
        updateStates ? setUpdatesStates(false) : setUpdatesStates(true);
    }

    const [ raidLevel, setRaidLevel ] = useState("null");


    async function handleNextButton() {
        if (checkedState.includes(1) && checkedState.includes(2) && raidLevel !== "null"){
	    let obj = { disk1: selectedDrives[0], disk2: selectedDrives[1]};
            let json = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkdrive`, obj);
            console.log(json.data);
            //setCurrentPage(currentPage + 1)
        } else if(!(checkedState.includes(1) && checkedState.includes(2))) {
            alert('You must select 2 drives.');
        }else if(raidLevel == 'null'){
            alert('You must select raid level.');
        }

    }

    return (
        <div className=''>
            <h2> TITLE!</h2>
            <h3> Description text!</h3>
            <div>
                {
                    drivesData.filter(e => e.NAME.includes("sd")).reverse().map((e, i) => {
                        return <div key={e.NAME}>
                            <input type="checkbox" checked={checkedState[i]} onClick={() => handleCheckbox(e, i)}></input>
                            <span>{e.NAME}</span>
                            <span>{((parseFloat(e.SIZE)) / 1000000000).toFixed(2) + ' gb'}</span>
                        </div>
                    })
                }
            </div>
            <div>
                <select onChange={e => setRaidLevel(e.target.value)}>
                    <option value='null'>Raid Level</option>
                    <option value='0' >Raid 0</option>
                    <option value='1'>Raid 1</option>
                </select>
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => handleNextButton()} className='next-button'>Next</button>

        </div>
    )
}
