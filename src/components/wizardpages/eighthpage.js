import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Eighthpage({ currentPage, setCurrentPage }) {

    useEffect(async () => {
        await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/startdaemon`);
    }, [])

    setTimeout(() => {
        setCurrentPage(currentPage + 1);
    }, "10000")

    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)`, textAlign: `center` }}>
                <h2>Daemon Activation</h2>
                <h3 style={{textAlign: `center`}}>Revo is initializing services, please be patient!</h3>
            <div>
                <div style={{ paddingTop: `100px` }} ><div class="nb-spinner"></div></div>
            </div>
            </div>
        </div>
    )
}