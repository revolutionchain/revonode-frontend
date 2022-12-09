import React from 'react';
import '../styles/style.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Firstpage from './wizardpages/firstpage';
import Secondpage from './wizardpages/secondpage';
import Thirdpage from './wizardpages/thirdpage';
import Fourthpage from './wizardpages/fourthpage';
import Fifthpage from './wizardpages/fifthpage';
import Sixthpage from './wizardpages/sixthpage';
import revoLogo from '../styles/images/revo-light.png';
import astronauteRevo1 from '../styles/images/AstronauteRevo-1.svg'
import astronauteRevo2 from '../styles/images/AstronauteRevo-2.svg'
import astronauteRevo3 from '../styles/images/AstronauteRevo-3.svg'
import astronauteRevo4 from '../styles/images/AstronauteRevo-4.svg'
import astronauteRevo5 from '../styles/images/AstronauteRevo-5.svg'
import astronauteRevo6 from '../styles/images/AstronauteRevo-6.svg'
import Seventhpage from './wizardpages/seventhpage';
import Eighthpage from './wizardpages/eighthpage';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;


export default function Home() {
    const [master, setMaster] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [drivesData, setDrivesData] = useState(false);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(async () => {        
        try{
            let result = await axios.get(`http://${window.location.hostname}:3001/checklocalip`);
            setLoaded(result);
        }catch (err){
            window.location.reload();
        }
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
        { textLeft: 'The WiFi configuration has been completed successfully: you will need to restart your node to apply it.' },

    ]

    let imgArr = [astronauteRevo1,astronauteRevo2,astronauteRevo3,astronauteRevo4,astronauteRevo5,astronauteRevo6];

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
                        <img className={`astronautImage${currentPage}`} src={imgArr[currentPage]} />
                    </div>
                    <div class="signup-form-conent">
                        <div id="signup-form" class="signup-form" >
                            <h3></h3>
                            <fieldset>
                                <span class="step-current">Step {currentPage} / 10</span>
                                <div class="form-group" style={!loaded ? {minHeight: `auto`, } : {}}>
                                    {!loaded && <div><h2 style={{marginTop: `100px`, marginBottom: `50px`}}>Please wait while we load the last installation resources...</h2><div class="nb-spinner"></div></div>}
                                    {currentPage == 1 && loaded && <Firstpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 2 && loaded && drivesData.length ? <Secondpage currentPage={currentPage} setCurrentPage={setCurrentPage} drivesData={drivesData} /> : currentPage == 2 && loaded && <div style={{paddingTop: `230px`}} ><div class="nb-spinner"></div></div>}
                                    {currentPage == 3 && loaded && <Thirdpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 4 && loaded && <Fourthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 5 && loaded && <Fifthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 6 && loaded && <Sixthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 7 && loaded && <Seventhpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 8 && loaded && <Eighthpage />}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
