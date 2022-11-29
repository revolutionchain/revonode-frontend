import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_LOCAL_NODE_IP } = process.env;



export default function Thirdpage({currentPage, setCurrentPage}) {

    const [ wifiData, setWifiData ] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const [ selectedWifi, setSelectedWifi ] = useState([]);


    useEffect( async () => {
        let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
        setWifiData(getwifidata);
    },[])

    function handleCheckbox (pos){
        wifiData.map((e,i) => {
            if(pos == i){
                let checkedArr = wifiData.map(e => false);
                checkedArr[i] = true;
                setCheckedState(checkedArr);
                setSelectedWifi(e);
            }
        })
    }

    return (
        <div className=''>
            <button>Re-Scan</button>
            <h2> Wifi!</h2>
            <h3> Description text!</h3>
            <div>
                {
                    wifiData?.map((e,i) => {
                        return <div>
                        <input type="checkbox" checked={checkedState[i]} onClick={() => handleCheckbox(i)}></input>
                        <span>{'Wifi name: '+ e}</span>
                        </div>
                    })
                }                
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>
        
        </div>
    )
}
