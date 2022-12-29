import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import floppyDiskImg from '../../styles/images/floppy-disk.png'
import failedIcon from '../../styles/images/failed.png'
import buttonArrow from '../../styles/images/button-arrow.png'
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
        raidLevel && handleSelect(raidLevel);
    }

    const [raidLevel, setRaidLevel] = useState("null");

    const [ raidResult, setRaidResult ] = useState(false);

    function handleSelect(e) {
        let drivesSize;
        setRaidLevel(e.value);
        if(selectedDrives.length > 1 && parseFloat(selectedDrives[0]?.SIZE / 1000000000).toFixed(2) <= parseFloat(selectedDrives[1]?.SIZE / 1000000000).toFixed(2)){
            drivesSize = (selectedDrives[0]?.SIZE / 1000000000).toFixed(2);
        }else if(selectedDrives.length > 1 && parseFloat(selectedDrives[0]?.SIZE / 1000000000).toFixed(2) > parseFloat(selectedDrives[1]?.SIZE / 1000000000).toFixed(2)){
            drivesSize = parseFloat(selectedDrives[1]?.SIZE / 1000000000).toFixed(2);
        }

        if(e.value == 0 && selectedDrives.length > 1){
            let sum = parseFloat(drivesSize) + parseFloat(drivesSize);
            setRaidResult( "Size: " + sum + "GB");            
        }else if (e.value == 1 && selectedDrives.length > 1) {
            setRaidResult( "Size: " + drivesSize + "GB");
        }
    }


    const options = [
        { value: 0, label: 'Raid 0' },
        { value: 1, label: 'Raid 1' },
    ]
    const [isLoading, setIsLoading] = useState(false);

    const [errorFound, setErrorFound] = useState('');

    async function handleNextButton() {
        setIsLoading(true);
        if (checkedState.includes(1) && checkedState.includes(2) && raidLevel !== "null") {
            let drivesObj = { disk1: selectedDrives[0], disk2: selectedDrives[1] };
            let checkdrive = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkdrive`, drivesObj);
            if (checkdrive?.data[0]?.disk1.includes('missing') || checkdrive?.data[1]?.disk2.includes('missing')) {
                setErrorFound('One of the selected disks is not connected correctly!');
                openModal();
            }
            let checkfilesystem = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkfilesystem`, drivesObj);
            if (!checkfilesystem?.data[0]?.disk1.includes('no filesystem') || !checkfilesystem?.data[1]?.disk2.includes('no filesystem')) {
                setErrorFound('One of the selected disks cannot be used because a file system already exists!');
                openModal();
            }
            let drivesAllowed = { disk1: drivesObj.disk1.NAME, disk2: drivesObj.disk2.NAME, raid: parseInt(raidLevel) }
            let makearray = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/makearray`, drivesAllowed);
            if (makearray?.data?.includes('ok')) {
                setCurrentPage(currentPage + 1);
            } else {
                setErrorFound('Storage array cannot be created, contact technical support');
                openModal();
            }
        } else if (!(checkedState.includes(1) && checkedState.includes(2))) {
            setErrorFound('You must select two disks!');
            openModal();
        } else if (raidLevel == 'null') {
            setErrorFound('You must select the RAID level!');
            openModal();
        }

    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            textAlign: 'center',
            backgroundColor: 'transparent'
        },
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(e) {
        setIsOpen(true);
        setIsLoading(false);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Storage</h2>
                <h3>If you are not using a fresh drive, please format the drive, there must be no partitions present, this installer will take care of everything. If you don't see your drives, check that they are connected correctly. Choose whether to use RAID 0 or RAID 1 for your data storage carrier. Don't know what RAID technology is? <a target='_blank' href='https://www.youtube.com/watch?v=U-OCdTeZLac'>Click here!</a></h3>
                {!isLoading ? <div>
                    <div style={{ backgroundColor: `#EEE`, textAlign: `left`, paddingTop: `5px` }}>
                        <span style={{ marginLeft: `10px` }}>Disk Drives</span>
                        {
                            drivesData.filter(e => e.NAME.includes("sd")).reverse().map((e, i) => {
                                return <div key={e.NAME} onClick={() => handleCheckbox(e, i)} className={checkedState[i] ? 'drives-container selected' : 'drives-container'}>
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
                    <div style={{ display: `flex`, marginTop: `15px`, alignItems: `center`}}>
                        <div style={{ width: `50%`}}>
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
                        <div style={{width: `50%`}}>{(raidLevel == 0 || raidLevel == 1) && (selectedDrives[0]?.NAME && selectedDrives[1]?.NAME) && <span>{raidResult}</span>}</div>
                    </div>
                </div> : <div style={{ paddingTop: `60px` }} ><div class="nb-spinner"></div></div>}
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button style={{display: `flex`, flexWrap: `wrap`, float: `right`, alignContent: `center`, justifyContent: `center`}} onClick={() => handleNextButton()} className='button-style next-button'>Confirm<img style={{width: `20px`, marginLeft: `5px`, marginTop: `-2px`}} src={buttonArrow} /></button>
                </div>
            </div>
            <div className='Modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <img className='warning-icon' src={failedIcon} />
                    <div className="div-balance-title div-abm-title">{errorFound}</div>
                    <button onClick={closeModal} className='button-style back-button modal-button'>Ok</button>
                </Modal>
            </div>
        </div>
    )
}
