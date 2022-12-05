import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import raidIcon from '../../styles/images/RAID-icon.png';
import warningIcon from '../../styles/images/warning.png';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;




export default function Thirdpage({ currentPage, setCurrentPage }) {

    const [arrayData, setArrayData] = useState(false);

    useEffect(async () => {
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        setArrayData(getarrayinfo.data.arrayStatus.split(" ").filter((e, i) => [3, 6, 7, 8, 14].includes(i)));
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
        let removeArray = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/removearray`, arrInfo);
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        if (!getarrayinfo.data.arrayStatus.includes('md0')) {
            setCurrentPage(currentPage - 1)
        }


    }


    const tableElem = ['Array Name', 'Raid Level', 'Storage', 'Size']

    return (
        <div className=''>
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
                {
                    arrayData.length && arrayData?.map((e, i) => {
                        let res = i == 0 ? e.slice(1) : i == arrayData.length - 1 ? ((parseFloat(e) / 1000000).toFixed(2)) + 'GB' : e;

                        return <div style={{color: `#888`}} className='div-drive-item'>{i == 3 ? <div></div> : <div style={{marginTop: `-5px`}}><div style={{fontSize: `16px`}} >{i > 3 ? tableElem[i - 1] : tableElem[i]}</div><div style={{fontSize: `12px`, marginTop: `-5px`}}>{i == 2 ? res.slice(0, 3) + " / " + arrayData[i + 1].slice(0, 3) : res}</div></div>}</div>
                    })
                }
            </div>

            <div className='Modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <img src={warningIcon} />
                    <div className="div-balance-title div-abm-title">Are you sure?</div>
                    <button onClick={closeModal} className='button-style back-button modal-button'>Cancelar</button>
                    <button onClick={() => handleRemoveArray()} className='button-style next-button modal-button'>Yes</button>
                </Modal>
            </div>
            <button onClick={() => openModal()} className='button-style back-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Next</button>

        </div>
    )
}
