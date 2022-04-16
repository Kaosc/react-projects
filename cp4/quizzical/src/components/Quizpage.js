import React from "react";
import Question from "./Question";
import { nanoid } from 'nanoid'

export default function Quizpage() {

    const [questions, setQuestions] = React.useState([])
    const [isDataFetched, setIsDataFetched] = React.useState(false)

    const fetchData = async () => {
        await fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results.map(item => {
                item.selected = false
                item.id = nanoid()
                item.currentAnswer = ''
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

    console.log(questions)

    function handleButtonClick (e) {
        const {id, value} = e.target
        setQuestions(prevQuestions => prevQuestions.map(question => {
            return question.id === id ? {...question, currentAnswer: value, selected: true} : question
        }))
    }

    const questionElements = questions.map((item, index)=> {
        console.log(item)

        return (
            <Question
                key={index}
                questionObject={item}
                handleButtonClick={handleButtonClick}
            />
        )
    })

    return (
        <div>
            <h1>Quiz Page</h1>
            {isDataFetched ? questionElements: <h1>Loading</h1>}
        </div>
    )

}