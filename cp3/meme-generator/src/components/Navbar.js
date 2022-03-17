import React from "react";
import trollFace from "../images/TrollFace.png"

export default function Navbar() {
    return (
        <nav>
            <div className="nav-head">
                <img className="logo" src={trollFace} alt="logo"></img>
                <h3 className="title">Meme Generator</h3>
            </div>
            <h3 className="nav-des">React Course - Project 3</h3>
        </nav>
    )
}