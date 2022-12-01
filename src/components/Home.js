import React from 'react';
import '../styles/style.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Firstpage from './wizardpages/firstpage';
import Secondpage from './wizardpages/secondpage';
import Thirdpage from './wizardpages/thirdpage';
import Fourthpage from './wizardpages/fourthpage';
import Fifthpage from './wizardpages/fifthpage';
import revoLogo from '../styles/images/revo-light.png'
const { REACT_APP_LOCAL_NODE_IP } = process.env;


export default function Home() {
    const [master, setMaster] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [drivesData, setDrivesData] = useState(false);

    useEffect(async () => {
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

    return (


        <div class="main">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-desc">
                        <div class="signup-desc-content">
                            <img className="revo-lgo" src={revoLogo} />
                            <p class="title">Sign up now to try undraw 30 days for free</p>
                            <p class="desc">
                                MIT licensed illustrations for every project you can imagine and create
                            </p>
                            <img src="images/signup-img.jpg" alt="" class="signup-img" />
                        </div>
                    </div>
                    <div class="signup-form-conent">
                        <form method="POST" id="signup-form" class="signup-form" enctype="multipart/form-data">
                            <h3></h3>
                            <fieldset>
                                <span class="step-current">Step {currentPage} / 4</span>
                                <div class="form-group">
                                    {currentPage == 1 && <Firstpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 2 && drivesData.length ? <Secondpage currentPage={currentPage} setCurrentPage={setCurrentPage} drivesData={drivesData} /> : currentPage == 2 && <div>'Loading..' </div>}
                                    {currentPage == 3 && <Thirdpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 4 && <Fourthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 5 && <Fifthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
