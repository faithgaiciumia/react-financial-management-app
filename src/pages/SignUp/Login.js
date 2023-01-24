import logo from "../../img/finlogo.png";
import illustration from "../../img/signup.png";
import TextField from "@mui/material/TextField";
import bgimg from "../../img/signup.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="container">
      <div className="signup-heading">
        <img src={logo} alt="logo" />
        <p>Login to your FinMan Account</p>
      </div>
      <div className="signup-row">
        <div className="col-2">
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="input full-length"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Enter your password"
              variant="outlined"
              className="input full-length"
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <FormControlLabel control={<Checkbox />} label="Show Password" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/home">
              <button type="button" className="filled-btn">
                Log In
              </button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <a className="signin-link">Sign up instead</a>
            </Link>
          </div>
        </div>
        <div
          className="col-2 bg-img"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
      </div>
    </div>
  );
}
