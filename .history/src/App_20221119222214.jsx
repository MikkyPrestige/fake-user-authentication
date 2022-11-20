import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/home" element={< Home />} />
      </Routes>
    </div>
  );

}

export default App;
