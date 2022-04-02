import React from "react";
import {nanoid} from "nanoid"

export default function Questions(props) {

    const quizData = props.allQuestions.results
    console.log(quizData)

    // const showQuestions = quizData.map(quiz => (
    //     <div
    //      key={nanoid()} 
    //      className="quiz-block"
    //      >
    //         <h2>{quiz.question}</h2>
    //         <h3>{quiz.incorrect_answers}</h3>
    //     </div>
    // ))

    const showQuestions = quizData.map(function(quiz){
        return (    
        <div
             key={nanoid()} 
             className="quiz-block"
             >
                <h2>{quiz.question}</h2>
                <h3>{quiz.incorrect_answers}</h3>
        </div>
        )
    })

    return (
        <div className="questions">
            {showQuestions}
        </div>
    )
}