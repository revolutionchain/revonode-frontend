import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
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
	    let drivesObj = { disk1: selectedDrives[0], disk2: selectedDrives[1]};
            let checkdrive = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkdrive`, drivesObj);
            if(checkdrive?.data[0]?.disk1.includes('missing') || checkdrive?.data[1]?.disk2.includes('missing') ){
                return alert('Drives missing');
            }
            let checkfilesystem = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkfilesystem`, drivesObj);
            if(!checkfilesystem?.data[0]?.disk1.includes('no filesystem') || !checkfilesystem?.data[1]?.disk2.includes('no filesystem')){
                return alert('Filesystem error');
            }
            let drivesAllowed = { disk1: drivesObj.disk1.NAME, disk2: drivesObj.disk2.NAME, raid: parseInt(raidLevel) }
            let makearray = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/makearray`, drivesAllowed);
            if(makearray?.data?.includes('ok')){
                setCurrentPage(currentPage + 1);
            }else {
                alert('Error: Array could not be created');
            }
        } else if(!(checkedState.includes(1) && checkedState.includes(2))) {
            alert('You must select 2 drives.');
        }else if(raidLevel == 'null'){
            alert('You must select raid level.');
        }

    }

    return (
        <div className=''>
            <h2> Select two drives!</h2>
            <div>
                {
                    drivesData.filter(e => e.NAME.includes("sd")).reverse().map((e, i) => {
                        return <div key={e.NAME} className='drives-container'>
                            <input type="checkbox" checked={checkedState[i]} onClick={() => handleCheckbox(e, i)}></input>
                            <span style={{marginRight: `10px`}}>{e.NAME}</span>
                            <span style={{marginRight: `10px`}}>{((parseFloat(e.SIZE)) / 1000000000).toFixed(2) + 'GB'}</span>
                            <span>{e.MODEL}</span>
                        </div>
                    })
                }
            </div>
            <div>
                <Select

                    defaultValue={'Select Raid'}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'purple' : 'grey',
                            border: state.isFocused ? "2px solid #7c7cdd" : "2px solid #cccccc",
                            "&:hover": {
                                border: "2px solid #7c7cdd",
                            }
                        }), option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected ? "#7c7cdd" : "white",
                            color: "black",
                            "&:hover": {
                                border: "1px solid #7c7cdd",
                            }
                        }),
                    }}

                    options={options} />
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => handleNextButton()} className='next-button'>Next</button>

        </div>
    )
}
