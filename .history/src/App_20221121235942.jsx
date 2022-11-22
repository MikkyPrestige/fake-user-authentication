import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Booking, FallBack, Error } from "./components";

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallBack}>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    </ErrorBoundary>
  );
}

export default App;
