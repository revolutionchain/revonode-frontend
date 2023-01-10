import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import raidIcon from '../../styles/images/RAID-icon.png';
import warningIcon from '../../styles/images/warning.png';



export default function Thirdpage({ currentPage, setCurrentPage }) {

    const [arrayData, setArrayData] = useState(false);

    useEffect(async () => {
        let getarrayinfo = await axios.get(`http://${window.location.hostname}:3001/getarrayinfo`);
        setArrayData(["md0"].concat(getarrayinfo.data.arrayStatus.split("md0")[1].split(" ").filter((e, i) => [3, 4, 5, 11].includes(i))));
    }, [])

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(e) {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
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

    async function handleRemoveArray() {
        let arrInfo = { disk1: arrayData[3].slice(0, 3), disk2: arrayData[2].slice(0, 3) };
        let removeArray = await axios.post(`http://${window.location.hostname}:3001/removearray`, arrInfo);
        let getarrayinfo = await axios.get(`http://${window.location.hostname}:3001/getarrayinfo`);
        if (!getarrayinfo.data.arrayStatus.includes('md0')) {
            setCurrentPage(currentPage - 1)
        }
    }

    const tableElem = ['Array Name', 'Raid Level', 'Storage', 'Size']

    return (
        <div className=''>
            <div className='content-container'>
                <h2>Array Created successfully!</h2>
                <h3>Your storage array has been successfully created!</h3>
                <div style={{
                    backgroundColor: `#EEE`,
                    textAlign: `left`,
                    marginRight: `10px`,
                    paddingLeft: `10px`,
                    paddingTop: `5px`,
                }}><span>Array Details</span></div>
                <div style={{ display: `flex`, marginRight: `10px`, alignItems: `center`, backgroundColor: `#EEE`, padding: `5px` }}>
                    <img style={{ width: `50px`, marginRight: `10px` }} src={raidIcon} />
                    <div style={{width: `100%`, display: `flex`, justifyContent: `space-around`}}>
                    {
                        arrayData.length && arrayData?.map((e, i) => {
                            let res = i == arrayData.length - 1 ? ((parseFloat(e) / 1000000).toFixed(2)) + 'GB' : i == 1 ? "Raid " + e.split("d")[1] : e;

                            return <div style={i == 3 ? {display: `none`} : { color: `#888` }} className='div-drive-item'>{i == 3 ? <div style={{display: `none`}} ></div> : <div style={{ marginTop: `-5px` }}><div style={{ fontSize: `16px` }} >{i > 3 ? tableElem[i - 1] : tableElem[i]}</div><div style={{ fontSize: `12px`, marginTop: `-5px` }}>{i == 2 ? res.slice(0, 3) + " / " + arrayData[i + 1].slice(0, 3) : res}</div></div>}</div>
                        })
                    }
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
                        <img className='warning-icon' src={warningIcon} />
                        <div className="div-balance-title div-abm-title">Are you sure you want to go back?<br></br>This will erase the newly created storage array.</div>
                        <button onClick={closeModal} className='button-style back-button modal-button'>Cancel</button>
                        <button onClick={() => handleRemoveArray()} className='button-style next-button modal-button'>Yes</button>
                    </Modal>
                </div>
            </div>

            <div className='buttons-container'>
                <div className='left'>
                    <button onClick={() => openModal()} className='button-style back-button'>Back</button>
                </div>

                <div className='right'>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Next</button>
                </div>
            </div>
        </div>
    )
}
