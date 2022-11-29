import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { REACT_APP_LOCAL_NODE_IP } = process.env;



export default function Thirdpage({currentPage, setCurrentPage}) {

    const [ arrayData, setArrayData ] = useState(false);

    useEffect( async () => {
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        setArrayData(getarrayinfo.data.arrayStatus.split(" ").filter((e,i) => [3, 6, 7, 8, 14].includes(i)));
    },[])

    return (
        <div className=''>
            <h2> TITLE!</h2>
            <h3> Description text!</h3>
            <div>
                
            </div>
            <button onClick={() => setCurrentPage(currentPage - 1)} className='next-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='next-button'>Next</button>
        
        </div>
    )
}
