import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Tenthpage({ walletData }) {

    const [rpcData, setRpcData] = useState(false);
    const [arrayData, setArrayData] = useState(false);

    useEffect(async () => {
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        setArrayData(getarrayinfo.data.arrayStatus.split(" ").filter((e, i) => [3, 6, 7, 8, 14].includes(i)));
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
        setRpcData(obj);
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

    const tableElem = ['Array Name', 'Raid Level', 'Storage', 'Size']

    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Daemon Activation</h2>
                <h3>Description.</h3>                
                <div style={{
                    backgroundColor: `#EEE`,
                    textAlign: `left`,
                    marginRight: `10px`,
                    paddingLeft: `10px`,
                    paddingTop: `5px`,
                }}><span>Node Data</span></div>
                        <input type="textarea">Disk Array Level: {arrayData[1]}
                            Disk Array Size:  {arrayData[4]} GB
                            RPC Username: {rpcData.user}
                            RPC Password: {rpcData.pass}

                            Your node name: {walletData.nodeName}
                            Wallet name: {walletData.walletName}
                            Wallet password: {walletData.walletPass}</input>    
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button className='button-style next-button'>Finish</button>
                </div>
            </div>
        </div>
    )
}