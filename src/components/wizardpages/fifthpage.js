import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import warningIcon from '../../styles/images/warning.png';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Fifthpage({ currentPage, setCurrentPage }) {

    const [arrayData, setArrayData] = useState(false);

    useEffect(async () => {
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

    async function handleReboot() {
        setErrorFound([ 2, 'Are you sure you want to reboot this device?']);
        openModal();
    }

    async function handleRemove() {
        let getarrayinfo = await axios.get(`http://${window.location.hostname}:3001/delwificonfig`);
    }

    async function handleConfirmButton() {
        if(errorFound[0] == 1){
            let getwificonfig = await axios.get(`http://${window.location.hostname}:3001/getwificonfig`);
            if (getwificonfig.data.includes('network')) {
                await handleRemove();
            }
            setCurrentPage(currentPage - 1)
        }else if(errorFound[0] == 2){
            await axios.get(`http://${window.location.hostname}:3001/forcereboot`);
            window.location.reload();
        }        
    }

    const [ agree, setAgree ] = useState(false);

    function handleAgreement () {
        agree ? setAgree(false) : setAgree(true);
    }

    const [errorFound, setErrorFound] = useState('');

    function handleNextButton () {
        if(agree){
            setCurrentPage(currentPage + 1)
        }else {
            setErrorFound([ 0, 'Please read best practice for WiFi']);
            openModal();
        }
    }

    function handleBackButton () {
        setErrorFound([ 1, `Are you sure you want to go back?<br>This will erase the newly created WiFi configuration.`]);
        openModal();
    }

    return (
        <div className=''>

            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>WiFi configured successfully!</h2>
                <h3>You can continue with the setup wizard or choose to restart your device.</h3>
                <h3><strong>WARNING:</strong> If you decide to restart now, leave the network cable connected, wait for the restart and check on the monitor if you find a second IP address. Resume the wizard with the new IP and unplug the LAN cable as well. If the second IP is not visible, reboot and move closer to the WiFi router, if the configuration is incorrect, use the cable connection to correct it or continue.</h3>
                <div style={{display: `flex`, marginBottom: `10px`}}>
                    <input value={agree} onClick={() => handleAgreement()} type="checkbox"></input>
                    <span>I've understood</span>
                </div>
                <div>
                    {
                        arrayData.length && arrayData?.map((e, i) => {
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
                        <img className='warning-icon' src={warningIcon} />
                        <div className="div-balance-title div-abm-title">{errorFound[0] == 0 || errorFound[0] == 2 ? errorFound[1] : <div dangerouslySetInnerHTML={errorFound.length && {__html: (errorFound[1]).replaceAll("`","")}}></div>}</div>
                        <button onClick={closeModal} className='button-style back-button modal-button'>{errorFound[0] == 0 ? "Ok" : "Cancel"}</button>
                        { errorFound[0] == 1 && <button onClick={() => handleConfirmButton()} className='button-style next-button modal-button'>Yes</button>}
                        { errorFound[0] == 2 && <button onClick={() => handleConfirmButton()} className='button-style next-button modal-button'>Yes</button>}
                    </Modal>
                </div>
            </div>

            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => handleBackButton()} className='button-style back-button'>Back</button>
                </div>

                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => handleReboot()} className='button-style skip-button'>Reboot</button>
                    <button onClick={() => handleNextButton()} className={agree ? 'button-style next-button' : 'button-style next-button next-grayed'}>Next</button>
                </div>
            </div>
        </div>
    )
}
