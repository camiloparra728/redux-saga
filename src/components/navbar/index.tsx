import React from 'react'
import './index.scss'
import { logo } from "../../react-app-env.d";

/**
 * Component nav
 * @returns component
 */
const Navbar: React.FC  = () => {
    return (
        <div id="nav">
            <div className="navs">
            <div className="containers">
                <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
