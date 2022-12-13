import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
import raidIcon from '../../styles/images/RAID-icon.png';
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
                }}><span>Array Details</span></div>
                <div style={{ display: `flex`, marginRight: `10px`, alignItems: `center`, backgroundColor: `#EEE`, padding: `5px` }}>
                    <img style={{ width: `50px`, marginRight: `10px` }} src={raidIcon} />
                    <div style={{ width: `100%`, display: `flex`, justifyContent: `space-around` }}>
                        {
                            arrayData.length && arrayData?.map((e, i) => {
                                let res = i == 0 ? e.slice(1) : i == arrayData.length - 1 ? ((parseFloat(e) / 1000000).toFixed(2)) + 'GB' : e;

                                return <div style={i == 3 ? { display: `none` } : { color: `#888` }} className='div-drive-item'>{i == 3 ? <div style={{ display: `none` }} ></div> : <div style={{ marginTop: `-5px` }}><div style={{ fontSize: `16px` }} >{i > 3 ? tableElem[i - 1] : tableElem[i]}</div><div style={{ fontSize: `12px`, marginTop: `-5px` }}>{i == 2 ? res.slice(0, 3) + " / " + arrayData[i + 1].slice(0, 3) : res}</div></div>}</div>
                            })
                        }
                    </div>
                </div>
                <div style={{
                    backgroundColor: `#EEE`,
                    textAlign: `left`,
                    marginRight: `10px`,
                    paddingLeft: `10px`,
                    paddingTop: `5px`,
                }}><span>Rpc Data</span></div>
                <div style={{ display: `flex`, marginRight: `10px`, alignItems: `center`, backgroundColor: `#EEE`, padding: `5px` }}>
                    <img style={{ width: `50px`, marginRight: `10px` }} src={raidIcon} />
                    <div style={{ width: `100%`, display: `flex`, justifyContent: `space-around` }}>
                        {
                            rpcData?.user && <div style={{ color: `#888` }} className='div-drive-item'>{
                                <div style={{ marginTop: `-5px` }}>
                                    <div style={{ fontSize: `16px` }} >Rpc Username</div>
                                    <div style={{ fontSize: `12px`, marginTop: `-5px` }}>{rpcData.user}</div>
                                </div>}
                            </div>
                        }
                        {
                            rpcData?.user && <div style={{ color: `#888` }} className='div-drive-item'>{
                                <div style={{ marginTop: `-5px` }}>
                                    <div style={{ fontSize: `16px` }} >Rpc Password</div>
                                    <div style={{ fontSize: `12px`, marginTop: `-5px` }}>{rpcData.pass}</div>
                                </div>}
                            </div>
                        }
                        {
                            rpcData?.user && <div style={{ color: `#888` }} className='div-drive-item'>{
                                <div style={{ marginTop: `-5px` }}>
                                    <div style={{ fontSize: `16px` }} >Node Name</div>
                                    <div style={{ fontSize: `12px`, marginTop: `-5px` }}>{rpcData.nodeName}</div>
                                </div>}
                            </div>
                        }
                    </div>
                </div><div style={{
                    backgroundColor: `#EEE`,
                    textAlign: `left`,
                    marginRight: `10px`,
                    paddingLeft: `10px`,
                    paddingTop: `5px`,
                }}><span>Wallet Data</span></div>
                <div style={{ display: `flex`, marginRight: `10px`, alignItems: `center`, backgroundColor: `#EEE`, padding: `5px` }}>
                    <img style={{ width: `50px`, marginRight: `10px` }} src={raidIcon} />
                    <div style={{ width: `100%`, display: `flex`, justifyContent: `space-around` }}>
                        {
                            walletData?.walletName && <div style={{ color: `#888` }} className='div-drive-item'>{
                                <div style={{ marginTop: `-5px` }}>
                                    <div style={{ fontSize: `16px` }} >Wallet Name</div>
                                    <div style={{ fontSize: `12px`, marginTop: `-5px` }}>{walletData.walletName}</div>
                                </div>}
                            </div>
                        }
                        {
                            walletData?.walletName && <div style={{ color: `#888` }} className='div-drive-item'>{
                                <div style={{ marginTop: `-5px` }}>
                                    <div style={{ fontSize: `16px` }} >Wallet Passphrase</div>
                                    <div style={{ fontSize: `12px`, marginTop: `-5px` }}>{walletData.walletPass}</div>
                                </div>}
                            </div>
                        }
                        {
                            walletData?.walletName && <div style={{ color: `#888` }} className='div-drive-item'>{
                                <div style={{ marginTop: `-5px` }}>
                                    <div style={{ fontSize: `16px` }} >Node Name</div>
                                    <div style={{ fontSize: `12px`, marginTop: `-5px` }}>{rpcData.nodeName}</div>
                                </div>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}