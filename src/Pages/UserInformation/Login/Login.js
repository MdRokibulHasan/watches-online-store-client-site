import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";

import "./Login.css";
const Login = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      history(redirect_uri);
    });
  };
  return (
    <div className=" login-section">
      <div className="login-title">
        <h1 className="text-center mb-2">Please Login</h1>
        <div className="login-input">
          <form>
            <div className="form-group pb-2">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input type="password" className="form-control my-3" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>

            <button type="button" class="btn-login my-2 mt-3">
              LOG IN{" "}
            </button>

            <Link to="/register">
              <button type="register-button" class="reg my-2">
                Register
              </button>
            </Link>
          </form>
        </div>
        <div className="google-btn d-flex justify-content-between">
          <button onClick={handleGoogleLogin} className="link-button">
            {" "}
            Google Sign IN
          </button>
          <button className="link-button"> Facebook Sign IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
