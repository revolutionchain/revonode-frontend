import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
const { REACT_APP_LOCAL_NODE_IP } = process.env;



export default function Fifthpage({currentPage, setCurrentPage}) {

    const [ arrayData, setArrayData ] = useState(false);

    useEffect( async () => {
    },[])

    
    

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

    async function handleReboot () {
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/forcereboot`);
    }

    async function handleRemove (){
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/delwificonfig`);        
    }

    async function handleBackButton (){
        await handleRemove();
        setCurrentPage(currentPage - 1)
    }

    return (
        <div className=''>
            <h2>WiFi configured successfully!</h2>
            <h3>You can continue with the setup wizard or choose to restart your device. WARNING: If you decide to restart now, leave the network cable connected, wait for the restart and check on the monitor if you find a second IP address. Resume the wizard with the new IP and unplug the LAN cable as well. If the second IP is not visible, reboot and move closer to the WiFi router, if the configuration is incorrect, use the cable connection to correct it or continue.</h3>
            <div>
                {
                    arrayData.length && arrayData?.map((e,i) => {
                        let res = i == 0 ? e.slice(1) : e;
                        return <div>{res}</div>
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
                    <div className="div-balance-title div-abm-title">Are you sure?</div>
                    <button onClick={closeModal} className='button-form'>Cancelar</button>
                    <button onClick={() => handleBackButton()} className='next-button'>Yes</button>
                </Modal>
            </div>
            <button onClick={() => openModal()} className='button-style back-button'>Back</button>
            <button onClick={() => handleRemove()} className='button-style remove-button'>Remove</button>
            <button onClick={() => handleReboot()} className='button-style skip-button'>Reboot</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Next</button>
        
        </div>
    )
}
