import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Booking, FallBack, Error } from "./components";
import { Login, User, Logout, Register } from "./profile";
import RequireAuth from "./profile/context/require";
import { AuthP }

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBack}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Nested Route */}
          <Route path="/login">
            <Route index element={<Login />} />
            {/* <Route path="user" element={<User />} /> */}
            {/* <Route path="logout" element={<Logout />} /> */}
            <Route
              path="register"
              element={
                <RequireAuth>
                  <Register />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
