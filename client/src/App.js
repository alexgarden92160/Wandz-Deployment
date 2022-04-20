import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={sessionStorage.getItem("isLoggedIn")
          ? <Workspace />
          : <Navigate to="/login" />} />
        {/* <Route exact path="/" element={
          <Workspace />} /> */}
        <Route exact path="/login" element={sessionStorage.getItem("isLoggedIn")
          ? <Navigate to="/" />
          : <Login />} />
        <Route exact path="/register" element={
          sessionStorage.getItem("isLoggedIn")
            ? <Navigate to="/" />
            : <Register />
        } />
        {/* <Route exact path="/profile" element={sessionStorage.getItem("isLoggedIn")
         ? <Profile />
         : <Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;