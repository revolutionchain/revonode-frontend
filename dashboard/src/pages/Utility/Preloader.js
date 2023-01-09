import React, { useEffect } from 'react';
import Dashboard from '../Dashboard';
import MetaTags from 'react-meta-tags';

const Preloader = props => {
    const preloaderDiv = document.getElementById("preloaderDiv");
    useEffect(() => {
        setTimeout(() => {
            if (preloaderDiv) {
                preloaderDiv.style.display = "none";
            }
        }, 2000);
    })

    return (
        <React.Fragment>
            <div id="preloaderDiv">
                <div id="preloader">
                    <div id="status">
                        <div className="spinner-chase">
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
            <MetaTags>
                <title>Preloader | Samply - React Admin & Dashboard Template</title>
            </MetaTags>
            <Dashboard isTitle={true} />
        </React.Fragment>
    )
}

export default Preloader;