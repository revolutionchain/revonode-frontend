import React from 'react';
import '../styles/Home.css'
import { useState, useEffect } from 'react';



export default function Home() {

    useEffect(() => {
    }, []);

    return (
        <div className='div-main-home'>
            <div className='home-div-content'>
                <h2>Logo</h2>
                <h3>Configuring your Node</h3>
                <div className='home-div-container'>
                    <form>
                        <input type='text' placeholder='user'></input>
                        <input type='text' placeholder='pass'></input>
                        <button >Submit</button>
                    </form>
                    <div>
                        <i class="fas fa-solid fa-laptop"></i>
                        <i class="fas fa-solid fa-laptop"></i>
                        <i class="fas fa-solid fa-laptop"></i>
                        <i class="fas fa-solid fa-laptop"></i>
                    </div>
                </div>
            </div>
            <div className='home-div-color'>
                <div className='home-div-steps-container'>
                    <div className='step'>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className='step'>
                        <i></i>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className='step'>
                        <i></i>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className='step'>
                        <i></i>
                        <div className='step-content'>
                            <h2>Application</h2>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}