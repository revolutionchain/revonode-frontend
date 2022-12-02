import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_LOCAL_NODE_IP } = process.env;



export default function Fourthpage({currentPage, setCurrentPage}) {

    const [ wifiData, setWifiData ] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const [ selectedWifi, setSelectedWifi ] = useState([]);
    const [input, setInput] = useState({
        essid: "",
        pass: "",
        country: ""
    });


    useEffect( async () => {
        let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
        setWifiData(getwifidata.data.split('	').filter(e => e.includes('SSID:')));
    },[])

    function handleCheckbox (elem, pos){
        wifiData.map((e,i) => {
            if(pos == i){
                let checkedArr = wifiData.map(e => false);
                checkedArr[i] = true;
                setCheckedState(checkedArr);
                setSelectedWifi(e.slice(5));
                setInput({
                    ...input,
                    [elem.target.name]: elem.target.value
                })
            }
        })
    }

    
    function handleInput(e) {
        if(e.target.value == 'Country'){
            setInput({
                ...input,
                [e.target.name]: ""
            })
        }else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
    }

    async function handleConnect (){
        if(input?.essid.length && input?.pass.length && input?.country.length){
            let genwificonfig = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/genwificonfig`, input);
            if(genwificonfig.data.includes('ok')){
                setCurrentPage(currentPage + 1)                
            }
        }else if(!input?.essid.length) {
            alert('Select a Wifi!')
        }else if(!input?.pass.length) {
            alert('Enter a Password.')
        }else if(!input?.country.length) {
            alert('Select a Country')
        }
    }

    async function handleRescan () {
        let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
        setWifiData(getwifidata.data.split('	').filter(e => e.includes('SSID:')));
        console.log(getwifidata);
    }

    return (
        <div className=''>
            <button onClick={() => handleRescan()}>Re-Scan</button>
            <h2> Wifi!</h2>
            <h3> Description text!</h3>
            <div>
                {
                    wifiData.length && wifiData?.map((e,i) => {
                        return <form>
                        <input type="checkbox" name='essid' value={e.slice(6, e.length-1)} checked={checkedState[i]} onClick={(e) => handleCheckbox(e,i)}></input>
                        <span>{'Wifi name: '+ e.slice(5, e.length-1)}</span>
                        { checkedState[i] && <input type='password' name='pass' placeholder="Password" onChange={(e)=> handleInput(e)}></input> }
                        { checkedState[i] && <select name='country' onChange={(e)=> handleInput(e)}>
                            <option value='Country'>Country</option>
                            <option value='AR'>AR</option>
			    <option value='IT'>IT</option>
                        </select> }
                        </form>
                    })
                }                
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button skip-button'>Skip</button>
            <button onClick={() => handleConnect()} className='button-style next-button'>Connect</button>
        
        </div>
    )
}
