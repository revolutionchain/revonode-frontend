import React from 'react';
import '../styles/Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Firstpage from './wizardpages/firstpage';
import Secondpage from './wizardpages/secondpage';
import Thirdpage from './wizardpages/thirdpage';
const { REACT_APP_LOCAL_NODE_IP } = process.env;


export default function Home() {
    const [ master, setMaster ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ drivesData, setDrivesData ] = useState(false);

    useEffect(async () => {
        let masterState = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkmaster`);
        setMaster(masterState.data);
    }, []);


    async function getDrives() {
        let drivesData = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/showdrives`);
        setDrivesData(drivesData.data);
    }

    currentPage == 2 && !drivesData && getDrives();


    return (
        <div className='div-main-home'>
            <div className='home-div-content'>
                <h2>Logo</h2>
                <h3>Configuring your Node</h3>
                <div className='home-div-container'>
                    { currentPage == 1 && <Firstpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                    { currentPage == 2 && drivesData.length ? <Secondpage currentPage={currentPage} setCurrentPage={setCurrentPage} drivesData={drivesData} /> : currentPage == 2 && <div>'Loading..' </div>}
                    { currentPage == 3 && <Thirdpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                    <div>
                        <div>
                        <i class="fas fa-solid fa-laptop"></i>
                        <i class="fas fa-solid fa-laptop"></i>
                        <i class="fas fa-solid fa-laptop"></i>
                        <i class="fas fa-solid fa-laptop"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-div-color'>
                <div className='home-div-steps-container'>
                    <div className='step'>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className='step'>
                        <i></i>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className='step'>
                        <i></i>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className='step'>
                        <i></i>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
