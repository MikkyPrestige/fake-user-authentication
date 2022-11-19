import React from "react";
import { Route, Routes } from "react-router-dom";
import { default as Home  } from "./components/home";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" component={Home} />
      </Routes>
    </div>
  );

}

export default App;
