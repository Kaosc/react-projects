import React from "react";
import he from 'he';

function Question (props) {

    const quesData = props.questionObject
    const answersEl = quesData.allAnswers.map((answer, index) => {

        let answerStatus = () => {
            if (quesData.currentAnswer === answer && !quesData.checked){
                return "selected css-button-3d--blue"
            }else if(quesData.currentAnswer === answer & quesData.currentAnswer === quesData.correct_answer & quesData.checked) {
                return "correct css-button-3d--blue"
            }else if(quesData.currentAnswer === answer & quesData.currentAnswer !== quesData.correct_answer & quesData.checked) {
                return "wrong css-button-3d--blue"
            }else if(quesData.currentAnswer !== answer & quesData.correct_answer === answer & quesData.checked) {
                return "correct css-button-3d--blue"
            }else{
                return "unselected css-button-3d--blue"
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
            <div className="answer-btn">{answersEl} </div>
        </div>
    )
}

export default Question