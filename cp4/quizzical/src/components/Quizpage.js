import React from "react";
import Question from "./Question";
import { nanoid } from 'nanoid'

const log = (arg) => console.log(arg)

export default function Quizpage() {

    const [questions, setQuestions] = React.useState([])
    const [isDataFetched, setIsDataFetched] = React.useState(false)
    const [gameStatus, setGameStatus] = React.useState(false)

    const fetchData = async () => {
        await fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results.map(item => {
                item.id = nanoid()
                item.currentAnswer = ''
                item.checked = false // Did the player finish the game?
                item.allAnswers = [...item.incorrect_answers, item.correct_answer]
                return item
            })))
    }

    React.useEffect(() => {

        fetchData()
        
        setTimeout(() => {
            setIsDataFetched(true)
        }, 3000);

    },[])


    function handleButtonClick (e) {
        const {id, value} = e.target
        setQuestions(prevQuestions => prevQuestions.map(question => {
            return question.id === id ? {...question, currentAnswer: value} : question
        }))
    }

    function checkAnswers() {
        setQuestions(prevQuestions => prevQuestions.map(question => {
            return {...question, checked: true}
        }))
        setGameStatus(true)
    }

    const questionElements = questions.map((item, index)=> {
        return (
            <Question
                key={index}
                questionObject={item}
                handleButtonClick={handleButtonClick}
                gameStatus={gameStatus}
            />
        )
    })

    return (
        <div>
            <h1>Quiz Page</h1>
            {isDataFetched ? questionElements: <h1>Loading</h1>}
            <button onClick={checkAnswers}>Check Answers</button>
        </div>
    )

}