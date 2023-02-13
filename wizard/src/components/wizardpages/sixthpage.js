import React, { useEffect, useState } from 'react';


export default function Sixthpage({ currentPage, setCurrentPage }) {

    useEffect(async () => {
    }, [])


    return (
        <div className=''>

            <div className='content-container'>
                <h2>Revo Software Lincese</h2>
                <div className='div-scrollable'>                    

                    <p style={{textAlign: `center`, margin: `10px 0`}}>The MIT License (MIT)</p>

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

            <div className='buttons-container' style={{ marginTop: `20px` }}>
                <div className='left'>
                    <button onClick={() => {
                        if((window.location.hostname).includes("revo.host")){
                            setCurrentPage(currentPage - 3)                            
                        }else {
                            setCurrentPage(currentPage - 2)
                        }}} className='button-style back-button'>Back</button>
                </div>

                <div className='right'>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Accept</button>
                </div>
            </div>
        </div>
    )
}
