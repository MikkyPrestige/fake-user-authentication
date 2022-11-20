import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={< Home />} />
      </Routes>
    </div>
  );

}

export default App;
