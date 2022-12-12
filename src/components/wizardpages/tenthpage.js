import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Tenthpage() {

    const [ rpcData, setRpcData ] = useState(false);

    useEffect(async () => {
        let result = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getrevoconfig`);
        console.log(result.data)
        let arr = result.data.split("rpc");
        console.log(arr);
    }, [])

    const [errorFound, setErrorFound] = useState('');

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
                <h2>Daemon Activation</h2>
                <h3>Description.</h3>
            <div>
                <div style={{ paddingTop: `60px` }} ><div class="nb-spinner"></div></div>
            </div>
            </div>
        </div>
    )
}