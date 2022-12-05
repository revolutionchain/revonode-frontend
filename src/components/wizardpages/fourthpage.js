import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Fourthpage({ currentPage, setCurrentPage }) {

    const [wifiData, setWifiData] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const [selectedWifi, setSelectedWifi] = useState([]);
    const [input, setInput] = useState({
        essid: "",
        pass: "",
        country: ""
    });


    useEffect(async () => {
        let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
        setWifiData(getwifidata.data.split('	').filter(e => e.includes('SSID:')));
    }, [])

    function handleCheckbox(elem, pos) {
        wifiData.map((e, i) => {
            if (pos == i) {
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
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function handleConnect() {
        if (input?.essid.length && input?.pass.length && input?.country.length) {
            let genwificonfig = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/genwificonfig`, input);
            if (genwificonfig.data.includes('ok')) {
                setCurrentPage(currentPage + 1)
            }
        } else if (!input?.essid.length) {
            alert('Select a Wifi!')
        } else if (!input?.pass.length) {
            alert('Enter a Password.')
        } else if (!input?.country.length) {
            alert('Select a Country')
        }
    }

    async function handleRescan() {
        let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
        setWifiData(getwifidata.data.split('	').filter(e => e.includes('SSID:')));
        console.log(getwifidata);
    }

    const options = [
        { value: 'AR', label: 'Argentina' },
        { value: 'IT', label: 'Italy' },
    ]



    function handleSelect(e) {
        setInput({
            ...input,
            country: e.value
        })
    }


    return (
        <div className=''>
            <button className='button-style next-button rescan-button' onClick={() => handleRescan()}>Re-Scan</button>
            <h2>Wifi</h2>
            <h3>The use of a wired ethernet network is highly recommended to guarantee the node maximum performance levels. However, if it is not possible to use a LAN cable, you can connect your node in WiFi making sure to keep it as close as possible to your WiFi router. If you're planning to use a cable, great! You can skip this page.</h3>
            <div>
            <div style={{
                backgroundColor: `#EEE`,
                textAlign: `left`,
                marginRight: `10px`,
                paddingLeft: `10px`,
                paddingTop: `5px`,
            }}><span>WiFi Networks</span></div>
                {
                    wifiData.length && wifiData?.map((e, i) => {
                        return <div className='div-wifi-container' >
                            <div style={{ display: `flex` }}>
                                {<input type="checkbox" name='essid' value={e.slice(6, e.length - 1)} checked={checkedState[i]} onClick={(e) => handleCheckbox(e, i)}></input>}
                                <span style={{fontSize: `16px`}}>{'Wifi name: ' + e.slice(5, e.length - 1)}</span>
                            </div>
                            <div>
                                {checkedState[i] && <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='pass' placeholder="Password" onChange={(e) => handleInput(e)}></input>}
                                {checkedState[i] &&
                                    <div style={{ width: `30%`, marginTop: `15px` }}>
                                        <Select
                                            onChange={handleSelect}
                                            menuPlacement="auto"
                                            menuPosition="fixed"
                                            defaultValue={'Select Country'}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderColor: state.isFocused ? 'purple' : 'grey',
                                                    border: state.isFocused ? "2px solid #7c7cdd" : "2px solid #cccccc",
                                                    "&:hover": {
                                                        border: "2px solid #7c7cdd",
                                                    }
                                                }), option: (provided, state) => ({
                                                    ...provided,
                                                    backgroundColor: state.isSelected ? "#7c7cdd" : "white",
                                                    color: "black",
                                                    "&:hover": {
                                                        border: "1px solid #7c7cdd",
                                                    }
                                                }),
                                            }}

                                            options={options} />
                                    </div>}
                            </div>
                        </div>
                    })
                }
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style skip-button'>Skip</button>
            <button onClick={() => handleConnect()} className='button-style next-button'>Connect</button>

        </div>
    )
}
