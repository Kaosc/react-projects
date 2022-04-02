import React from "react";

export default function Questions(props) {

    const quizData = props.allQuestions.results
    console.log(quizData)

    const showQuestions = quizData.map(quiz => (
        <div className="quiz-block">
            <h2>{quiz.question}</h2>
            <h3>{quiz.incorrect_answers}</h3>
        </div>
    ))

    return (
        <div className="questions">
            {showQuestions}
        </div>
    )
}