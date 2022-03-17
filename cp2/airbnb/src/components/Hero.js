import React from "react"
import heroImg from "../images/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-img" src={heroImg} alt="hero"></img>
            <h1 className="hero-title"> Online Experiences </h1>
            <p className="hero-description">
            Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}