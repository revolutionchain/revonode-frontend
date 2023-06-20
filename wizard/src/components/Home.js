import React from 'react';
import '../styles/style.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Firstpage from './wizardpages/firstpage';
import Sixthpage from './wizardpages/sixthpage';
import Seventhpage from './wizardpages/seventhpage';
import Eighthpage from './wizardpages/eighthpage';
import Ninethpage from './wizardpages/ninethpage';
import Tenthpage from './wizardpages/tenthpage';
import revoLogo from '../styles/images/revo-light.png';
import astronauteRevo1 from '../styles/images/AstronauteRevo-1.svg'
import astronauteRevo2 from '../styles/images/AstronauteRevo-6.svg'
import astronauteRevo3 from '../styles/images/AstronauteRevo-7.svg'
import astronauteRevo4 from '../styles/images/AstronauteRevo-8.svg'
import astronauteRevo5 from '../styles/images/AstronauteRevo-9.svg'
import astronauteRevo6 from '../styles/images/AstronauteRevo-10.svg'



export default function Home() {
    const [master, setMaster] = useState(false);
    const [currentPage, setCurrentPage] = useState(6);
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
        url = `http://${window.location.hostname}:3001/api`
      }
  
      setCurrentUrl(url);
        try{
            let result=true;
            /*
            let result = await axios.post(`${url}/checklocalip`);*/
            setLoaded(result);
        }catch (err){
            window.location.reload();
        }    
        let initialPage = 1;

        
        let masterState;

        try {
            masterState = await axios.post(`${url}/checkmaster`);
        }catch(err) {
            masterState = {data: false};
        }
        
        setMaster(masterState.data);
        if(masterState.data && (masterState.data).includes("master")){
            window.location.href = `http://${window.location.hostname}/`;
        }else {
                let getrpcdata = await axios.post(`${url}/getrevoconfig`);
                if(getrpcdata?.data?.includes('rpcuser')) {
                    initialPage = initialPage + 3
                }
                setCurrentPage(initialPage);
            }
    }, []);


    let leftContent = [
        { textLeft: 'Thank you for choosing to support REVO technology by joining the blockchain network!' },
        { textLeft: 'Please review revo software license.' },
        { textLeft: "Generating the configuration file for the Revo Node daemon. Usually you don't need to remember the RPC credentials, but it's very important to choose a secure combination if your node will be fully exposed on the network (exposed host)." },
        { textLeft: 'Please wait while the Revo software launches for the first time!' },
        { textLeft: 'This is the trickiest part of all. It is extremely important to check several times that you have entered the password correctly. Without you will never be able to unlock your crypto wallet ever again without reconfiguring your node from scratch!' },
        { textLeft: 'From now on you are officially a full validator node of the Revo blockchain! Usually the synchronization of the blocks with the global network can take from a few hours to a few days! Welcome on board!' }
    ]

    let imgArr = [astronauteRevo1,astronauteRevo2,astronauteRevo3,astronauteRevo4,astronauteRevo5,astronauteRevo6];


    return (
        <div className="main">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-desc">
                        <div className="signup-desc-content">
                            <img className="revo-lgo" src={revoLogo} />
                            <p className="desc">
                                { leftContent[currentPage-1]?.textLeft }
                            </p>
                            {/*<img src="images/signup-img.jpg" alt="" className="signup-img" />*/}
                        </div>
                        <img className={`astronautImage${currentPage}`} src={imgArr[currentPage-1]} />
                    </div>
                    <div className="signup-form-conent">
                        <div id="signup-form" className="signup-form" >
                            <h3></h3>
                            <fieldset>
                                <span className="step-current">Step {currentPage} / 6</span>
                                <div className="form-group" style={!loaded ? {minHeight: `auto`, } : {}}>
                                    {!loaded && <div><h2 style={{marginTop: `100px`, marginBottom: `50px`}}>Please wait while we load the last installation resources...</h2><div className="nb-spinner"></div></div>}
                                    {currentPage == 1 && loaded && <Firstpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 2 && loaded && <Sixthpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 3 && loaded && <Seventhpage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                                    {currentPage == 4 && loaded && <Eighthpage currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
                                    {currentPage == 5 && loaded && <Ninethpage currentPage={currentPage} setCurrentPage={setCurrentPage} setWalletData={setWalletData} />}
                                    {currentPage == 6 && loaded && <Tenthpage walletData={walletData} />}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



}
