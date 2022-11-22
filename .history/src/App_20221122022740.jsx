import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Auth, Booking, FallBack, Error } from "./components";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBack}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
