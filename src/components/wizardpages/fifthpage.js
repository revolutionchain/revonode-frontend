import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_LOCAL_NODE_IP } = process.env;



export default function Fifthpage({currentPage, setCurrentPage}) {

    const [ arrayData, setArrayData ] = useState(false);

    useEffect( async () => {
    },[])

    async function handleReboot () {
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/forcereboot`);
    }

    async function handleRemove (){
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/delwificonfig`);        
    }

    return (
        <div className=''>
            <h2> Config Successfully for ESSID WiFi!</h2>
            <h3> Description text!</h3>
            <div>
                {
                    arrayData.length && arrayData?.map((e,i) => {
                        let res = i == 0 ? e.slice(1) : e;
                        return <div>{res}</div>
                    })
                }                
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Remove</button>
            <button onClick={() => handleReboot()} className='next-button'>Reboot</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>
        
        </div>
    )
}
