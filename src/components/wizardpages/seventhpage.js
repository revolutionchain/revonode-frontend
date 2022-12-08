import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Seventhpage({ currentPage, setCurrentPage }) {

    const [input, setInput] = useState({
        rpcUser: "",
        rpcPass: "",
        rpcRePass: ""
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
        if (input?.rpcUser.length && input?.rpcPass.length && input?.rpcRePass.length) {
            let genwificonfig = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/genwificonfig`, input);
            if (genwificonfig.data.includes('ok')) {
                setCurrentPage(currentPage + 1)
            }
        } else if (!input?.essid.length) {
            setErrorFound('You must select a WiFi network!');
            openModal();
        } else if (!input?.pass.length) {
            setErrorFound('You have not entered a password!');
            openModal();
        } else if (!input?.country.length) {
            setErrorFound('You must select the abbreviation of your country!');
            openModal();
        }
    }

    const [getError, setGetError] = useState(false);

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
    }

    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Create RPC user Title</h2>
                <h3>Description.</h3>
            </div>
            <div>
                <input style={{ width: `60%`, fontSize: `16px` }} type='text' name='rpcUser' placeholder="Username" onChange={(e) => handleInput(e)}></input>
                <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='rpcPass' placeholder="Password" onChange={(e) => handleInput(e)}></input>
                <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='rpcRePass' placeholder="Repeat password" onChange={(e) => handleInput(e)}></input>
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => handleCreate()} className='button-style next-button'>Create</button>
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
