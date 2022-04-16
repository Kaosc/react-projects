import React from "react";
import { Link } from "react-router-dom";

export default function Start() {

    return (
        <div className="start">
        <h1>Quizzical</h1>
        <button><Link to="/quizpage"><p>Start Quiz</p></Link></button>
    </div>
    )

}