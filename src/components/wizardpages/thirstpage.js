import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_LOCAL_NODE_IP } = process.env;



export default function Thirstpage({currentPage, setCurrentPage}) {

    const [ arrayData, setArrayData ] = useState(false);

    useEffect( async () => {
        let getarrayinfo = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`, drivesObj);
        setArrayData(getarrayinfo.arrayStatus.split(" "));
    },[])

    return (
        <div className=''>
            <h2> TITLE!</h2>
            <h3> Description text!</h3>
            <div>
                
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => handleNextButton()} className='next-button'>Next</button>
        
        </div>
    )
}
