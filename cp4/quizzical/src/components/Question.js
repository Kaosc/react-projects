import React from "react";
import he from 'he';

function Question (props) {

    const quesData = props.questionObject

    const answersEl = quesData.allAnswers.map((answer, index) => {

        let answerStatus = () => {
            if (quesData.currentAnswer === answer && !quesData.checked){
                return "selected"
            }else if(quesData.currentAnswer === answer & quesData.currentAnswer === quesData.correct_answer & quesData.checked) {
                return "correct"
            }else if(quesData.currentAnswer === answer & quesData.currentAnswer !== quesData.correct_answer & quesData.checked) {
                return "wrong"
            }else{
                return "unselected"
            }
        }
        
        return (
            <button
            key={index}
            id={quesData.id}
            value={answer}
            disabled={props.gameStatus}
            onClick={props.handleButtonClick}
            className={answerStatus()}
            >
            {he.decode(answer)}
            </button>
        )
    })

    return (    
        <div>
            <div>{he.decode(quesData.question)}</div>
            <div>{answersEl}</div>
        </div>
    )
}

export default Question