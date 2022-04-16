import React from "react";
import he from 'he';

function Question (props) {

    const questionData = props.questionObject

    const answersEl = questionData.allAnswers.map((answer, index) => {
        return (
            <button
            className={questionData.selected ? "selected" : ""}
            key={index}
            id={questionData.id}
            value={answer}
            selected={false}
            onClick={props.handleButtonClick}
            >
                {he.decode(answer)}
            </button>
        )
    })

    return (    
        <div>
            <div>{he.decode(questionData.question)}</div>
            <div>{answersEl}</div>
        </div>
    )
}

export default Question