import React from "react";
import { Link } from "react-router-dom";

export default function Start() {

    return (
        <div className="start">
        <h1 className="start-title">Quizzical</h1>
        <button className="start-btn">
            <Link to="/quizpage">
                <p>Start</p>
            </Link>
        </button>
    </div>
    )

}