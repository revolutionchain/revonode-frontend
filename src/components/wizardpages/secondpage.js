import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import floppyDiskImg from '../../styles/images/floppy-disk.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP ? REACT_APP_LOCAL_NODE_WIFI_IP : REACT_APP_LOCAL_NODE_ETH_IP;


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

    const [raidLevel, setRaidLevel] = useState("null");

    function handleSelect(e) {
        setRaidLevel(e.value);
    }

    const options = [
        { value: 0, label: 'Raid 0' },
        { value: 1, label: 'Raid 1' },
    ]
    const [isLoading, setIsLoading] = useState(false);

    async function handleNextButton() {
        setIsLoading(true);
        if (checkedState.includes(1) && checkedState.includes(2) && raidLevel !== "null") {
            let drivesObj = { disk1: selectedDrives[0], disk2: selectedDrives[1] };
            let checkdrive = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkdrive`, drivesObj);
            if (checkdrive?.data[0]?.disk1.includes('missing') || checkdrive?.data[1]?.disk2.includes('missing')) {
                return alert('Drives missing');
            }
            let checkfilesystem = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkfilesystem`, drivesObj);
            if (!checkfilesystem?.data[0]?.disk1.includes('no filesystem') || !checkfilesystem?.data[1]?.disk2.includes('no filesystem')) {
                return alert('Filesystem error');
            }
            let drivesAllowed = { disk1: drivesObj.disk1.NAME, disk2: drivesObj.disk2.NAME, raid: parseInt(raidLevel) }
            let makearray = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/makearray`, drivesAllowed);
            if (makearray?.data?.includes('ok')) {
                setCurrentPage(currentPage + 1);
            } else {
                alert('Error: Array could not be created');
            }
        } else if (!(checkedState.includes(1) && checkedState.includes(2))) {
            alert('You must select 2 drives.');
        } else if (raidLevel == 'null') {
            alert('You must select raid level.');
        }

    }

    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Storage</h2>
                <h3>If you are not using a fresh drive, please format the drive, there must be no partitions present, this installer will take care of everything. If you don't see your drives, check that they are connected correctly. Choose whether to use RAID 0 or RAID 1 for your data storage carrier. Don't know what RAID technology is? <a target='_blank' href='https://www.youtube.com/watch?v=U-OCdTeZLac'>Click here!</a></h3>
                { !isLoading ? <div>
                    <div style={{ backgroundColor: `#EEE`, textAlign: `left`, paddingTop: `5px` }}>
                        <span style={{ marginLeft: `10px` }}>Disk Drives</span>
                        {
                            drivesData.filter(e => e.NAME.includes("sd")).reverse().map((e, i) => {
                                return <div key={e.NAME} onClick={() => handleCheckbox(e, i)} className={checkedState[i] ? 'drives-container selected' : 'drives-container'}>
                                    {/*<input type="checkbox" checked={checkedState[i]} ></input>*/}
                                    <img style={{ width: `40px`, height: `30px`, marginRight: `10px` }} src={floppyDiskImg} />
                                    <div>
                                        <span style={{ marginRight: `10px`, fontSize: `16px` }}>{e.NAME}</span>
                                        <span style={{ marginRight: `10px`, fontSize: `16px` }}>{((parseFloat(e.SIZE)) / 1000000000).toFixed(2) + 'GB'}</span>
                                        <span style={{ display: `block`, fontSize: `12px`, marginTop: `-5px` }}>{e.MODEL}</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div style={{ width: `50%`, marginTop: `15px` }}>
                        <Select
                            onChange={handleSelect}
                            menuPlacement="auto"
                            menuPosition="fixed"
                            defaultValue={{ label: 'Select Raid Level' }}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'purple' : 'grey',
                                    border: state.isFocused ? "2px solid #050A30" : "2px solid #cccccc",
                                    "&:hover": {
                                        border: "2px solid #050A30",
                                    }
                                }), option: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: state.isSelected ? "#dfeaf1" : "white",
                                    color: "black",
                                    border: "1px solid white",
                                    "&:hover": {
                                        border: "1px solid #050A30",
                                    }
                                }),
                            }}

                            options={options} />
                    </div>
                </div> : <div style={{paddingTop: `50px`}} ><div class="bt-spinner"></div></div> }
            </div>


            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => handleNextButton()} className='button-style next-button'>Confirm</button>
                </div>
            </div>



        </div>
    )
}
