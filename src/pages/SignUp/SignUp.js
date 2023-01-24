import logo from "../../img/finlogo.png";
import illustration from "../../img/signup.png";
import TextField from "@mui/material/TextField";
import bgimg from "../../img/signup.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="container">
      <div className="signup-heading">
        <img src={logo} alt="logo" />
        <p>Create your free FinMan Account</p>
      </div>
      <div className="signup-row">
        <div className="col-2">
          <div className="row">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="input"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className="input"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="input full-length"
            />
          </div>
          <div className="row">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="input"
            />
            <TextField
              id="outlined-basic"
              label="Confirm"
              variant="outlined"
              className="input"
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <FormControlLabel control={<Checkbox />} label="Show Password" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/home">
              <button type="button" className="filled-btn">
                Register
              </button>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <a className="signin-link">Sign in instead</a>
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
