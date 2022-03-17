import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src={airbnbLogo} alt="logo"></img>
        </nav>
    )
}