import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
import warningIcon from '../../styles/images/warning.png';
import passIcon from '../../styles/images/pass-icon.png'
import walletIcon from '../../styles/images/wallet-icon.png'
import buttonArrow from '../../styles/images/button-arrow.png'
import openEye from '../../styles/images/open-eye.png'
import closedEye from '../../styles/images/closed-eye.png'


export default function Ninethpage({ currentPage, setCurrentPage, setWalletData }) {

    const [input, setInput] = useState({
        walletName: "",
        walletPass: "",
        walletRePass: ""
    });

    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(async () => {
      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001/api`
      }
  
      setCurrentUrl(url);
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
        var userFilter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let invalidPassChar = false;
        let invalidUserChar = [];
        setIsLoading(true);
        if(input?.walletPass) {
                if((input.walletPass).includes(" ")){
                    invalidPassChar = true;
                }
        }             
        if(input?.walletName) {
            (input?.walletName).split("").map(e => {
                if(!userFilter.includes(e)){
                    invalidUserChar.push(e);
                }
            })
        }             
        if (input?.walletName.length && input?.walletPass.length && input?.walletPass.length >= 6 && input?.walletRePass == input?.walletPass && !invalidUserChar.length && !invalidPassChar) {
            let createWallet = await axios.post(`${currentUrl}/createwallet`, input);
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
        } else if (invalidUserChar.length) {
            setErrorFound('Wallet name can only contains letters.');
            openModal();
        } else if (invalidPassChar) {
            setErrorFound('Secret passphrase can not contains white spaces.');
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
        await axios.post(`${currentUrl}/stopdaemon`);
        await axios.post(`${currentUrl}/delrevoconfig`);
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

    const [ passButtonState, setPassButtonState ] = useState(true);

    function handlePassButton () {
        passButtonState ? setPassButtonState(false) : setPassButtonState(true);
    }

    return (
        <div className=''>
            <div className='content-container'>
                <h2>Create Wallet</h2>
                <h3>Give your wallet a name and be sure to use a strong password to secure your RVOs!</h3>
                {!isLoading ?
                    <div>
                        <div>
                            <div style={{ display: `flex`, alignItems: `center` }}>
                                <img style={{ width: `30px`, height: `30px`, paddingTop: `5px` }} src={walletIcon} />
                                <input className='data-input' type='text' name='walletName' placeholder="Wallet Name" onChange={(e) => handleInput(e)}></input>
                            </div>
                            <div style={{ display: `flex`, alignItems: `center`, margin: `5px 0` }}>
                                <img style={{ width: `30px`, height: `30px`, paddingTop: `5px` }} src={passIcon} />
                                <div className='data-input input-container'><input className='data-input' style={{ width: `100%`, border: `none` }} type={passButtonState ? 'password' : 'text'} name='walletPass' placeholder="Wallet secret passphrase" onChange={(e) => handleInput(e)}></input><button onClick={() => handlePassButton()} style={{height: `30px`, border: `none`, backgroundColor: `transparent`}}><img style={{width: `40px`, height: `30px`}} src={passButtonState ? openEye : closedEye}/></button></div>
                            </div>
                            <div style={{ display: `flex`, alignItems: `center` }}>
                                <img style={{ width: `30px`, height: `30px`, paddingTop: `5px` }} src={passIcon} />
                                <div className='data-input input-container'> <input className='data-input' style={{ width: `100%`, border: `none` }} type={passButtonState ? 'password' : 'text'} name='walletRePass' placeholder="Repeat secret passphrase" onChange={(e) => handleInput(e)}></input><button onClick={() => handlePassButton()} style={{height: `30px`, border: `none`, backgroundColor: `transparent`}}><img style={{width: `40px`, height: `30px`}} src={passButtonState ? openEye : closedEye}/></button></div>
                            </div>
                        </div>
                    </div> : <div style={{ paddingTop: `100px` }} ><div class="nb-spinner"></div></div>
                }
            </div>

            {!isLoading && <div className='buttons-container'>
                <div className='left'>
                    <button onClick={() => handleBackButton()} className='button-style back-button'>Back</button>
                </div>
                <div className='right'>
                    <button  onClick={() => handleCreate()} className='button-style next-button wifi-button'>Create<img style={{width: `20px`, marginLeft: `5px`, marginTop: `-2px`}} src={buttonArrow} /></button>
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