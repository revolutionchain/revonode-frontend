import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import floppyDiskImg from '../../styles/images/floppy-disk.png'
import failedIcon from '../../styles/images/failed.png'
import buttonArrow from '../../styles/images/button-arrow.png'

export default function Secondpage({ currentPage, setCurrentPage, drivesData }) {

    const [selectedDrives, setSelectedDrives] = useState([]);
    const [updateStates, setUpdatesStates] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const [totalDrives, setTotalDrives] = useState([]);

    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(async () => {
      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001/api`
      }
  
      setCurrentUrl(url);
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
        handleSelect({value: raidLevel}, drives);
        updateStates ? setUpdatesStates(false) : setUpdatesStates(true);
    }

    const [raidLevel, setRaidLevel] = useState("null");

    raidLevel == "null" && (window.location.hostname).includes("revo.host") && setRaidLevel(0);

    const [ raidResult, setRaidResult ] = useState(false);

    function handleSelect(e, drives) {
        let usedDrives;
        if(drives && !drives.action){
            usedDrives = drives;
        }else {
            usedDrives = selectedDrives
        }
        let drivesSize;
        setRaidLevel(e.value);
        if(usedDrives.length > 1 && parseFloat(usedDrives[0]?.SIZE ) <= parseFloat(usedDrives[1]?.SIZE)){
            drivesSize = parseFloat(usedDrives[0]?.SIZE / 1000000000).toFixed(2);
        }else if (usedDrives.length > 1 && parseFloat(usedDrives[0]?.SIZE) > parseFloat(usedDrives[1]?.SIZE)){
            drivesSize = parseFloat(usedDrives[1]?.SIZE / 1000000000).toFixed(2);
        }

        
        if(e.value == 0 && usedDrives.length > 1){
            let sum = parseFloat(drivesSize) + parseFloat(drivesSize);
            setRaidResult( "Size: " + sum + "GB");            
        }else if (e.value == 1 && usedDrives.length > 1) {
            setRaidResult( "Size: " + drivesSize + "GB");
        }
    }

    

    
    raidLevel !== "null" && !raidResult && selectedDrives.length > 1 && handleSelect({value: raidLevel});


    const options =  [
        { value: 0, label: 'Raid 0' },
        { value: 1, label: 'Raid 1' },
    ]
    const [isLoading, setIsLoading] = useState(false);

    const [errorFound, setErrorFound] = useState('');

    async function handleNextButton() {
        setIsLoading(true);
        if (checkedState.includes(1) && checkedState.includes(2) && raidLevel !== "null") {
            let drivesObj = { disk1: selectedDrives[0], disk2: selectedDrives[1] };
            let checkdrive = await axios.post(`${currentUrl}/checkdrive`, drivesObj);
            if (checkdrive?.data[0]?.disk1.includes('missing') || checkdrive?.data[1]?.disk2.includes('missing')) {
                setErrorFound('One of the selected disks is not connected correctly!');
                openModal();
            }
            let checkfilesystem = await axios.post(`${currentUrl}/checkfilesystem`, drivesObj);
            if (!checkfilesystem?.data[0]?.disk1.includes('no filesystem') || !checkfilesystem?.data[1]?.disk2.includes('no filesystem')) {
                setErrorFound('One of the selected disks cannot be used because a file system already exists!');
                openModal();
            }
            let drivesAllowed = { disk1: drivesObj.disk1.NAME, disk2: drivesObj.disk2.NAME, raid: parseInt(raidLevel) }
            let makearray = await axios.post(`${currentUrl}/makearray`, drivesAllowed);
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
            <div className='content-container'>
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
                    <div className='raid-container' style={{ marginTop: `15px`, alignItems: `center`}}>
                        <div className='select2-container' >
                            <Select
                                onChange={handleSelect}
                                menuPlacement="auto"
                                menuPosition="fixed"
                                defaultValue={!(window.location.hostname).includes("revo.host") ? { label: 'Select Raid Level' } : { label: 'Raid 0', value: 0 }}
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
                                options={!(window.location.hostname).includes("revo.host") ? options : [{label: "Raid 0", value: 0}]} />
                        </div>
                        { !(window.location.hostname).includes("revo.host") ? <div className='raid-result'>{(raidLevel == 0 || raidLevel == 1) && (selectedDrives[0]?.NAME && selectedDrives[1]?.NAME) && <span>{raidResult}</span>}</div> : <div className='raid-result'>{<span>Virtual node detected</span>}</div> }
                    </div>
                </div> : <div style={{ paddingTop: `60px` }} ><div class="nb-spinner"></div></div>}
            </div>
            <div className='buttons-container' >
                <div className='left'>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>
                <div className='right'>
                    <button  onClick={() => handleNextButton()} className='button-style next-button wifi-button'>Confirm<img style={{width: `20px`, marginLeft: `5px`, marginTop: `-2px`}} src={buttonArrow} /></button>
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
