import React from 'react';
import { Link } from 'react-router-dom'

import './InitialPage.css';
import iot from '../../assets/images/iot.png'

function InitialPage() {
    return (
        <div className="App">
            <header className="App-header">
                <p>IoT Message Encryption</p>
            </header>
            <div className="Image-container">
                <img src={iot} alt="IoT Schema" className="Image"/>
            </div>
            <div className="Button-container">
                <Link to="/encrypt"><button className="Button">Encrypt</button></Link>
                <Link to="/decrypt"><button className="Button">Decrypt</button></Link>
            </div>
        </div>
    );
}

export default InitialPage;
