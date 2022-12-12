import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Tenthpage({walletData}) {

    const [ rpcData, setRpcData ] = useState(false);

    useEffect(async () => {
        let result = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getrevoconfig`);
        let arr = []
        arr[0] = result.data.split("rpc")[1];
        arr[1] = result.data.split("rpc")[2];
        arr[2] = result.data.split("uacomment=")[1];
        let obj = {
            user: arr[0].slice(5, (arr[0]).length - 1),
            pass: arr[1].slice(9, (arr[1]).length - 1),
            nodeName: arr[2].slice(0, arr[2].length - 3)
        }
        console.log(obj);
        console.log(walletData);
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