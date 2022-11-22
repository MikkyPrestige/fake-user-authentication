import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Booking, FallBack, Error } from "./components";
import { Login }  from "./profile";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBack}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
