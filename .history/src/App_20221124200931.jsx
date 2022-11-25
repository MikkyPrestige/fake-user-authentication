import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Booking, FallBack, Error } from "./components";
import { Login, User, Logout, SignUp } from "./profile";
import RequireAuth from "./profile/context/require";
import { AuthProvider } from "./profile/context/auth";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBack}>
        <Navigation />
        <AuthProvider>
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/user"
              element={
                <RequireAuth>
                  <User />
                </RequireAuth>
              }
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
