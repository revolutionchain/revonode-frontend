import React from 'react';
import '../styles/style.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Firstpage from './wizardpages/firstpage';
import Secondpage from './wizardpages/secondpage';
import Thirdpage from './wizardpages/thirdpage';
import Fourthpage from './wizardpages/fourthpage';
import Fifthpage from './wizardpages/fifthpage';
import revoLogo from '../styles/images/revo-light.png';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;


export default function Home() {
    const [master, setMaster] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [drivesData, setDrivesData] = useState(false);

    useEffect(async () => {        
        let checklocalip = await axios.get(`http://${window.location.hostname}:3001/checklocalip`);
        let initialPage = 1;
        let masterState = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/checkmaster`);
        setMaster(masterState.data);
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        if (getarrayinfo.data.arrayStatus.includes('md0')) {
            initialPage = initialPage + 3;
            let getwificonfig = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getwificonfig`);
            if (getwificonfig.data.includes('network')) {
                initialPage = initialPage + 1;
            }
            setCurrentPage(initialPage);
        }
    }, []);


    async function getDrives() {
        let drivesData = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/showdrives`);
        setDrivesData(drivesData.data);
    }

    currentPage == 2 && !drivesData && getDrives();

    let leftContent = [
        { textLeft: 'Thank you for choosing to support REVO technology by joining the blockchain network!' },
        { textLeft: 'The Revo software needs a certain amount of disk space, on this page you will need to select two SSD disks for saving the blockchain. It is always recommended to use storage devices of the same model and of the same capacity.' },
        { textLeft: 'Your storage array has been successfully created!' },
        { textLeft: 'Configure your node to work with WiFi. You can also give two connections for redoundancy.' },
        { textLeft: 'The WiFi configuration has been completed successfully: you will need to restart your node to apply it.' }
    ]

    return (


        <div class="main">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-desc">
                        <div class="signup-desc-content">
                            <img className="revo-lgo" src={revoLogo} />
                            {/*<p class="title">Sign up now to try undraw 30 days for free</p>*/}
                            <p class="desc">
                                { leftContent[currentPage-1]?.textLeft }
                            </p>
                            <img src="images/signup-img.jpg" alt="" class="signup-img" />
                        </div>
                    </div>
                    <div class="signup-form-conent">
                        <div id="signup-form" class="signup-form" >
                            <h3></h3>
                            <fieldset>
                                <span class="step-current">Step {currentPage} / 6</span>
                                <div class="form-group">
                                    {currentPage == 1 && <Firstpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 2 && drivesData.length ? <Secondpage currentPage={currentPage} setCurrentPage={setCurrentPage} drivesData={drivesData} /> : currentPage == 2 && <div>'Loading..' </div>}
                                    {currentPage == 3 && <Thirdpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 4 && <Fourthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 5 && <Fifthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
