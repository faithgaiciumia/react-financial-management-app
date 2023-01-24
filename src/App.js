import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Onboarding/Intro";
import Login from "./pages/SignUp/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
