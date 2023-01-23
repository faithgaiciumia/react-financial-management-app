import logo from "../../img/finlogo.png";
import illustration from "../../img/signup.png";
export default function SignUp() {
  return (
    <div className="container">
      <div className="signup-heading">
        <img src={logo} alt="logo" />
        <p>Create your free FinMan Account</p>
      </div>
      <div className="signup-row">
        <div className="col-2">
          <h1>inputs</h1>
        </div>
        <div className="col-2">
          <img src={illustration} alt="illustration"/>
          <p>Road to financial freedom</p>
        </div>
      </div>
    </div>
  );
}
