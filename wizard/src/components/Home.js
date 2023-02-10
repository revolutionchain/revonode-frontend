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
import Seventhpage from './wizardpages/seventhpage';
import Eighthpage from './wizardpages/eighthpage';
import Ninethpage from './wizardpages/ninethpage';
import Tenthpage from './wizardpages/tenthpage';
import revoLogo from '../styles/images/revo-light.png';
import astronauteRevo1 from '../styles/images/AstronauteRevo-1.svg'
import astronauteRevo2 from '../styles/images/AstronauteRevo-2.svg'
import astronauteRevo3 from '../styles/images/AstronauteRevo-3.svg'
import astronauteRevo4 from '../styles/images/AstronauteRevo-4.svg'
import astronauteRevo5 from '../styles/images/AstronauteRevo-5.svg'
import astronauteRevo6 from '../styles/images/AstronauteRevo-6.svg'
import astronauteRevo7 from '../styles/images/AstronauteRevo-7.svg'
import astronauteRevo8 from '../styles/images/AstronauteRevo-8.svg'
import astronauteRevo9 from '../styles/images/AstronauteRevo-9.svg'
import astronauteRevo10 from '../styles/images/AstronauteRevo-10.svg'


export default function Home() {
    const [master, setMaster] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [drivesData, setDrivesData] = useState(false);
    const [ loaded, setLoaded ] = useState(false);
    const [ walletData, setWalletData ] = useState({
        walletName: "",
        walletPass: ""
    })

    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(async () => {
      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001`
      }
  
      setCurrentUrl(url);
        try{
            let result = await axios.get(`https://node.revo.host/api/checklocalip`);
            setLoaded(result);
        }catch (err){
            window.location.reload();
        }    
        let initialPage = 1;
        let masterState = await axios.get(`https://node.revo.host/api/checkmaster`);
        setMaster(masterState.data);
        if(masterState.data.includes("master")){
            window.location.href = `https://node.revo.host/api/`;
        }else {
            let getarrayinfo = await axios.get(`${url}/getarrayinfo`);
            if (getarrayinfo.data.arrayStatus.includes('md0')) {
                initialPage = initialPage + 3;
                let getwificonfig = await axios.get(`https://node.revo.host/api/getwificonfig`);
                if (getwificonfig.data.includes('network')) {
                    initialPage = initialPage + 2;
                }
                let getrpcdata = await axios.get(`https://node.revo.host/api/getrevoconfig`);
                if(!getwificonfig.data.includes('network') && getrpcdata?.data?.includes('rpcuser')) {
                    initialPage = initialPage + 3
                }else if (getwificonfig.data.includes('network') && getrpcdata?.data?.includes('rpcuser')){
                    initialPage = initialPage + 2
                }
                setCurrentPage(initialPage);
            }
        }
    }, []);

    async function getDrives() {
        let drivesData = await axios.get(`https://node.revo.host/api/showdrives`);
        setDrivesData(drivesData.data);
    }

    currentPage == 2 && !drivesData && getDrives();

    let leftContent = [
        { textLeft: 'Thank you for choosing to support REVO technology by joining the blockchain network!' },
        { textLeft: 'The Revo software needs a certain amount of disk space, on this page you will need to select two SSD disks for saving the blockchain. It is always recommended to use storage devices of the same model and of the same capacity.' },
        { textLeft: 'Your storage array has been successfully created!' },
        { textLeft: 'Configure your node to work with WiFi. You can also give two connections for redoundancy.' },
        { textLeft: 'The WiFi configuration has been completed successfully: you will need to restart your node to apply it.' },
        { textLeft: 'Please review revo software license.' },
        { textLeft: "Generating the configuration file for the Revo Node daemon. Usually you don't need to remember the RPC credentials, but it's very important to choose a secure combination if your node will be fully exposed on the network (exposed host)." },
        { textLeft: 'Please wait while the Revo software launches for the first time!' },
        { textLeft: 'This is the trickiest part of all. It is extremely important to check several times that you have entered the password correctly. Without you will never be able to unlock your crypto wallet ever again without reconfiguring your node from scratch!' },
        { textLeft: 'From now on you are officially a full validator node of the Revo blockchain! Usually the synchronization of the blocks with the global network can take from a few hours to a few days! Welcome on board!' }
    ]

    let imgArr = [astronauteRevo1,astronauteRevo2,astronauteRevo3,astronauteRevo4,astronauteRevo5,astronauteRevo6,astronauteRevo7,astronauteRevo8,astronauteRevo9,astronauteRevo10];


    return (
        <div class="main">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-desc">
                        <div class="signup-desc-content">
                            <img className="revo-lgo" src={revoLogo} />
                            <p class="desc">
                                { leftContent[currentPage-1]?.textLeft }
                            </p>
                            {/*<img src="images/signup-img.jpg" alt="" class="signup-img" />*/}
                        </div>
                        <img className={`astronautImage${currentPage}`} src={imgArr[currentPage-1]} />
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
                                    {currentPage == 5 && loaded && <Fifthpage currentPage={currentPage} setCurrentPage={setCurrentPage} setLoaded={setLoaded} />}
                                    {currentPage == 6 && loaded && <Sixthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 7 && loaded && <Seventhpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 8 && loaded && <Eighthpage currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
                                    {currentPage == 9 && loaded && <Ninethpage currentPage={currentPage} setCurrentPage={setCurrentPage} setWalletData={setWalletData} />}
                                    {currentPage == 10 && loaded && <Tenthpage walletData={walletData} />}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



}
