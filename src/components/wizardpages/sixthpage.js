import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import warningIcon from '../../styles/images/warning.png';
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Sixthpage({ currentPage, setCurrentPage }) {

    const [arrayData, setArrayData] = useState(false);

    useEffect(async () => {
    }, [])


    return (
        <div className=''>

            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Revo Software Lincese</h2>
                <div className='div-scrollable'>

                    The MIT License (MIT)

                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:

                    The above copyright notice and this permission notice shall be included in
                    all copies or substantial portions of the Software.

                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                    THE SOFTWARE.
                </div>
            </div>

            <div style={{ display: `flex`, marginTop: `20px` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>

                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Accept</button>
                </div>
            </div>
        </div>
    )
}
