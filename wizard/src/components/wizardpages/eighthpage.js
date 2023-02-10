import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Eighthpage({ currentPage, setCurrentPage }) {



    useEffect(async () => {
      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001`
      }
        await axios.get(`${url}/startdaemon`);
    }, [])

    setTimeout(() => {
        setCurrentPage(currentPage + 1);
    }, "10000")

    return (
        <div className=''>
            <div className='content-container' style={{ textAlign: `center` }}>
                <h2>Daemon Activation</h2>
                <h3 style={{textAlign: `center`}}>Revo is initializing services, please be patient!</h3>
            <div>
                <div style={{ paddingTop: `100px` }} ><div class="nb-spinner"></div></div>
            </div>
            </div>
        </div>
    )
}