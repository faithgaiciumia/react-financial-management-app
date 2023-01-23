import "../../App.css";
import logo from "../../img/finlogo.png";
import illustrationOne from "../../img/ilOne.png";
import illustrationTwo from "../../img/ilTwo.png";
import illustrationThree from "../../img/ilThree.png";
import illustrationFour from "../../img/ilFour.png";
import illustrationFive from "../../img/ilFive.png";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Product Guide</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Support</a>
            </li>
          </ul>
          <Link to="/signup">
            <button type="button" className="btn-outlined">
              Get Started
            </button>
          </Link>
        </nav>
      </header>
      <main>
        <div className="banner row">
          <div className="col">
            <p className="h1">
              Be in Control of your finances, save and invest in your future
            </p>
            <p className="lead">
              The #1 Financial Management Software for Personal Use
            </p>
            <Link to="/signup">
              <button type="button" className="filled-btn">
                Sign up for free
              </button>
            </Link>
          </div>
          <div className="col">
            <img src={illustrationOne} alt="illustration-one" />
          </div>
        </div>
        <div className="content-one">
          <p className="h2">Road to Financial Freedom</p>
          <div className="content-one-row">
            <div className="col-3">
              <img src={illustrationTwo} alt="illustration-two" />
            </div>
            <div className="col-3">
              <p className="lead">
                We provide you with an avenue to record your daily spending, and
                earning. A way to track how much money you’re using and how much
                is coming in.{" "}
              </p>
            </div>
            <div className="col-3">
              <img src={illustrationThree} alt="illustration-three" />
            </div>
          </div>
        </div>
        <div className="content-three">
          <p className="h2">All in one place</p>
          <div className="content-three-row">
            <div className="col-2-lg">
              <img src={illustrationFour} alt="" />
            </div>
            <div className="col-2">
              <p className="lead">
                We provide you with an avenue to record your daily spending, and
                earning. A way to track how much money you’re using and how much
                is coming in.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="content-four">
          <p className="h2">Professional Financial Insights</p>
          <div className="content-four-row">
            <div className="col-2">
              <p className="lead">
                We provide you with an avenue to record your daily spending, and
                earning. A way to track how much money you’re using and how much
                is coming in.
              </p>
            </div>
            <div>
              <img src={illustrationFive} alt="illustration-five" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <p className="lead">Copyright © 2023 FinMan</p>
        </div>
      </footer>
    </>
  );
}
