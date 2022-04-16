import React from "react";
import { BrowserRouter as Router, useRoutes, } from "react-router-dom";

import Start from "./components/Start";
import Quizpage from "./components/Quizpage";

function App() {

  const Pages = () => {
    let routes = useRoutes([
      { path: "/", element: <Start /> },
      { path: "quizpage", element: <Quizpage /> },
    ]);
    return routes;
  };

  return (
    <div className="App">
      <Router>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
