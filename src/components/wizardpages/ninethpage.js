import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
import warningIcon from '../../styles/images/warning.png';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Ninethpage({ currentPage, setCurrentPage }) {

    const [input, setInput] = useState({
        walletName: "",
        walletPass: "",
        walletRePass: ""
    });

    useEffect(async () => {
    }, [])

    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const [errorFound, setErrorFound] = useState('');

    async function handleCreate() {
        if (input?.walletName.length && input?.walletPass.length && input?.walletRePass == input?.walletPass) {
            let createWallet = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/createwallet`, input);
            if (createWallet.data.includes('ok')) {
                setCurrentPage(currentPage + 1)
            }
        } else if (!input?.walletName.length) {
            setErrorFound('Enter a Wallet name!');
            openModal();
        } else if (!input?.walletPass.length) {
            setErrorFound('You have not entered a secret passphrase!');
            openModal();
        } else if (input?.walletRePass !== input?.walletRePass) {
            setErrorFound('Secret passphrase does not match.');
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
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
        setBackPressed(false);
    }

    async function backConfirmed() {
        await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/stopdaemon`);
        await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/delrevoconfig`);
    }

    const [ backPressed, setBackPressed ] = useState(false);
    function handleBackButton(){
        setBackPressed(true);
        openModal();
    }
    
    async function handleConfirmBackButton() {
        await backConfirmed();
        setCurrentPage(currentPage - 2)
    }


    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Create Wallet</h2>
                <h3>Description.</h3>
            <div>
                <input style={{ width: `60%`, fontSize: `16px` }} type='text' name='walletName' placeholder="Wallet Name" onChange={(e) => handleInput(e)}></input>
                <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='walletPass' placeholder="Wallet secret passphrase" onChange={(e) => handleInput(e)}></input>
                <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='walletRePass' placeholder="Repeat secret passphrase" onChange={(e) => handleInput(e)}></input>
            </div>
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => handleBackButton()} className='button-style back-button'>Back</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => handleCreate()} className='button-style next-button'>Create</button>
                </div>
            </div>
            <div className='Modal'>{
                backPressed ? 
                
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <img className='warning-icon' src={warningIcon} />
                    <div className="div-balance-title div-abm-title">Are you sure you want to go back?<br></br>This will erase the newly created RPC config file.</div>
                        <button onClick={closeModal} className='button-style back-button modal-button'>Cancel</button>
                        <button onClick={() => handleConfirmBackButton()} className='button-style next-button modal-button'>Yes</button>
                </Modal>
                :
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
                </Modal>}
            </div>
        </div>
    )
}