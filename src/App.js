import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Onboarding/Intro";
import Login from "./pages/SignUp/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import Spendings from "./pages/Spendings/Spendings";
import Earnings from "./pages/Earnings/Earnings";
import Predictions from "./pages/Predictions/Predictions";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="spendings" element={<Spendings />} />
          <Route exact path="earnings" element={<Earnings />} />
          <Route exact path="predictions" element={<Predictions />} />
          <Route exact path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
