import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
import warningIcon from '../../styles/images/warning.png';
import userIcon from '../../styles/images/user-icon.png'
import passIcon from '../../styles/images/pass-icon.png'
import walletIcon from '../../styles/images/wallet-icon.png'
import buttonArrow from '../../styles/images/button-arrow.png'


export default function Ninethpage({ currentPage, setCurrentPage, setWalletData }) {

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
    const [isLoading, setIsLoading] = useState(false);

    async function handleCreate() {
        let symbols = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi);
        setIsLoading(true);
        if (input?.walletName.length && input?.walletPass.length && input?.walletPass.length >= 6 && input?.walletRePass == input?.walletPass && symbols.exec(input?.walletPass) == null) {
            let createWallet = await axios.post(`http://${window.location.hostname}:3001/createwallet`, input);
            if (createWallet.data.includes('ok')) {
                setWalletData(input)
                setCurrentPage(currentPage + 1)
            }
        } else if (!input?.walletName.length) {
            setErrorFound('Enter a Wallet name!');
            openModal();
        } else if (!input?.walletPass.length) {
            setErrorFound('You have not entered a secret passphrase!');
            openModal();
        } else if (input?.walletPass.length < 6) {
            setErrorFound('Secret passphrase must have at least 6 characters! (letters and numbers)');
            openModal();
        } else if (input?.walletPass !== input?.walletRePass) {
            setErrorFound('Secret passphrase does not match.');
            openModal();
        } else if (symbols.exec(input?.walletPass) !== null) {
            setErrorFound('Secret passphrase can only contain letters and numbers.');
            openModal();
        }
        setIsLoading(false);
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
        await axios.get(`http://${window.location.hostname}:3001/stopdaemon`);
        await axios.get(`http://${window.location.hostname}:3001/delrevoconfig`);
    }

    const [backPressed, setBackPressed] = useState(false);
    function handleBackButton() {
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
                <h3>Give your wallet a name and be sure to use a strong password to secure your RVOs!</h3>
                {!isLoading ?
                    <div>
                        <div>
                            <div style={{ display: `flex`, alignItems: `center` }}>
                                <img style={{ width: `30px`, height: `30px`, paddingTop: `5px` }} src={walletIcon} />
                                <input style={{ width: `60%`, fontSize: `16px` }} type='text' name='walletName' placeholder="Wallet Name" onChange={(e) => handleInput(e)}></input>
                            </div>
                            <div style={{ display: `flex`, alignItems: `center`, margin: `5px 0` }}>
                                <img style={{ width: `30px`, height: `30px`, paddingTop: `5px` }} src={passIcon} />
                                <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='walletPass' placeholder="Wallet secret passphrase" onChange={(e) => handleInput(e)}></input>
                            </div>
                            <div style={{ display: `flex`, alignItems: `center` }}>
                                <img style={{ width: `30px`, height: `30px`, paddingTop: `5px` }} src={passIcon} />
                                <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='walletRePass' placeholder="Repeat secret passphrase" onChange={(e) => handleInput(e)}></input>
                            </div>
                        </div>
                    </div> : <div style={{ paddingTop: `100px` }} ><div class="nb-spinner"></div></div>
                }
            </div>

            {!isLoading && <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => handleBackButton()} className='button-style back-button'>Back</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button style={{display: `flex`, flexWrap: `wrap`, float: `right`, alignContent: `center`, justifyContent: `center`}} onClick={() => handleCreate()} className='button-style next-button'>Create<img style={{width: `20px`, marginLeft: `5px`, marginTop: `-2px`}} src={buttonArrow} /></button>
                </div>
            </div>}
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