import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img src={reactLogo} className="nav--icon" alt="as"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggle}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
        </nav>
    )
}