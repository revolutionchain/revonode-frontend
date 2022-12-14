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
    }, []);

    const [textArea, setTextArea] = useState(false);

    arrayData.length && rpcData?.user && !textArea && setTextArea(`Disk Array Level: Raid ${arrayData[1].slice(4)}
Disk Array Size:  ${(parseFloat(arrayData[4]) / 1000000).toFixed(2)}GB
RPC Username: ${rpcData?.user}
RPC Password: ${rpcData?.pass}

Your node name: ${rpcData?.nodeName}
Wallet name: ${walletData?.walletName}
Wallet password: ${walletData?.walletPass}`);

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


    const handleCopyButton = () => {

    }
    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Daemon Activation</h2>
                <h3>Description.</h3>
                <div style={{ textAlign: `left` }}>
                    <span style={{ position: `absolute`, backgroundColor: `white`, marginLeft: `10px`, padding: `0px 5px`, fontSize: `16px` }}>Node Data</span>
                    {textArea && <textarea style={{ resize: `none`, minHeight: `229px`, minWidth: `350px`, marginTop: `10px`, padding: `15px`, border: `3px solid #050A30`, borderRadius: `5px`, fontSize: `16px` }}>
                        {
                            textArea
                        }</textarea>}
                </div>
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() =>  navigator.clipboard.writeText(textArea)} className='button-style back-button'>Copy to Clipboard</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button className='button-style next-button'>Finish</button>
                </div>
            </div>
        </div>
    )
}