import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Booking } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
