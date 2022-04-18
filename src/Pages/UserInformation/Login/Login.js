import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";
import Footer from "../../../Components/Share/Footer/Footer";
import Header from "../../../Components/Share/Navbar/Header";

import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { allContexts } = useAuth();
  const { user, loginUser, isLoading, authError, googleSignIn } = allContexts;

  const location = useLocation();
  const history = useNavigate();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleSignIn(location, history);
  };
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    // console.log(value);
  };
  console.log(loginData.email);
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <>
      <Header></Header>
      <div className=" login-section">
        <div className="login-title">
          <h1 className="text-center mb-2">Please Login</h1>
          <div className="login-input">
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group pb-2">
                <input
                  type="email"
                  name="email"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  onChange={handelonchange}
                  className="form-control my-3"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>

              {!isLoading && (
                <button type="submit" className="btn-login my-2 mt-3">
                  Log In{" "}
                </button>
              )}
              {isLoading && (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {user?.email && (
                <div class="alert alert-success" role="alert">
                  User Login successful!
                </div>
              )}
              {authError && (
                <div class="alert alert-warning" role="alert">
                  {authError}
                </div>
              )}

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
      <Footer></Footer>
    </>
  );
};

export default Login;
