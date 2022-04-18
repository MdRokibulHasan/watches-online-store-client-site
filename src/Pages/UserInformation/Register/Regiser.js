import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";
import Footer from "../../../Components/Share/Footer/Footer";
import Header from "../../../Components/Share/Navbar/Header";
import "./Register.css";
const Regiser = () => {
  const [loginData, setLoginData] = useState({});
  const { allContexts } = useAuth();
  const { user, registerUser, isLoading, authError } = allContexts;
  const location = useLocation();
  const history = useNavigate();
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    console.log(newlogindata);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  // console.log(loginData);
  return (
    <>
      <Header></Header>
      <div className=" register-section">
        <div className="login-title">
          <h1 className="text-center mb-2">Please Register</h1>
          <div className="login-input">
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group pb-2 my-3">
                <input
                  type="text"
                  name="name"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
              </div>
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
              <div className="form-group">
                <input
                  type="password"
                  name="password2"
                  onChange={handelonchange}
                  className="form-control my-3"
                  id="exampleInputPassword1"
                  placeholder="Confrom Password"
                />
              </div>

              {!isLoading && (
                <button type="submit" class="btn-login my-2 mt-3">
                  Register{" "}
                </button>
              )}
              {isLoading && (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {user?.email && (
                <div class="alert alert-success" role="alert">
                  User Register successful!
                </div>
              )}
              {authError && (
                <div class="alert alert-warning" role="alert">
                  {authError}
                </div>
              )}
              <div className="">
                <span>Have a account?</span>
                <Link to="/login">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Regiser;
