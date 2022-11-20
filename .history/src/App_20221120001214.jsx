import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Register } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/register" element={< Register />} />
      </Routes>
    </div>
  );

}

export default App;
