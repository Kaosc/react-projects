import React from "react";
import he from 'he';

function Question (props) {

    const quesData = props.questionObject
    const answersEl = quesData.allAnswers.map((answer, index) => {

        let answerStatus = () => {
            if (quesData.currentAnswer === answer && !quesData.checked){
                return "selected answer-btn"
            }else if(quesData.currentAnswer === answer & quesData.currentAnswer === quesData.correct_answer & quesData.checked) {
                return "correct answer-btn"
            }else if(quesData.currentAnswer === answer & quesData.currentAnswer !== quesData.correct_answer & quesData.checked) {
                return "wrong answer-btn"
            }else if(quesData.currentAnswer !== answer & quesData.correct_answer === answer & quesData.checked) {
                return "correct answer-btn"
            }else{
                return "unselected answer-btn"
            }
        }
        
        return (
            <button
            key={index}
            id={quesData.id}
            value={answer}
            disabled={!props.gameStatus}
            onClick={props.handleButtonClick}
            className={answerStatus() }
            >
            {he.decode(answer)}
            </button>
        )
    })

    return (    
        <div>
            <div className="question-box">
                <span className="question-number">{props.questionNumber +". "}</span>
                {he.decode(quesData.question)}
                </div>
            {answersEl}
        </div>
    )
}

export default Question