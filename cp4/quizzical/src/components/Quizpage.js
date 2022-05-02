import React from "react";
import Question from "./Question";
import { nanoid } from 'nanoid'

export default function Quizpage() {

    const [questions, setQuestions] = React.useState([])
    const [isDataFetched, setIsDataFetched] = React.useState(false)
    const [gameStatus, setGameStatus] = React.useState(false)
    let questionNumber = 0

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
            setGameStatus(true)
    }

    React.useEffect(() => {
        fetchData()
        
        setTimeout(() => {
            setIsDataFetched(true)
        }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setGameStatus(false)
    }

    function restartGame() {
        fetchData()
    }

    const questionElements = questions.map((item, index)=> {
        questionNumber+=1
        return (
            <Question
                key={index}
                questionObject={item}
                handleButtonClick={handleButtonClick}
                gameStatus={gameStatus}
                questionNumber={questionNumber}
            />
        )
    })

    return (
        <div>   
            <div className="quizpage-container" hidden={isDataFetched ? false : true} >
                <h1 className="quizpage-title">Quizzical Gaming</h1>

                {questionElements}

                <button 
                className="css-button-2" 
                hidden={isDataFetched ? false : true} 
                onClick={gameStatus ? checkAnswers : restartGame}
                >
                    {gameStatus ? "Check Answers" : "Start Over"}
                    </button>
            </div>
            <div className="loading-container" hidden={isDataFetched ? true : false}>Loading</div>
        </div>

    )

}