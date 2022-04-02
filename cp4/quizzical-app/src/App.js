import React  from "react";
import Questions from "./components/Questions";

function App() {

  const [gameStatus, setGameStatus] = React.useState(true)
  const [allQuestions, setAllQuestions] = React.useState({})

  React.useEffect (function(){
    fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(quesData => setAllQuestions(quesData))
  }, [gameStatus]) 

  // CHANGING GAME STATUS
  function startGame() {
    setGameStatus(prevStatus => !prevStatus)
  }

  return (
    <div className="App">

      {/* START PAGE */}
      {gameStatus && <div className="start">
            <h1>Quizzical</h1>
            <button onClick={startGame}>Start Quiz</button>
      </div> }

      {/* QUESTION PAGE */}
      {!gameStatus && <Questions 
        gameStatus={gameStatus}
        allQuestions={allQuestions}
      /> }

    </div>
  );
}

export default App;
