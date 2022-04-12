import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Regiser = () => {
  return (
    <div className=" register-section">
      <div className="login-title">
        <h1 className="text-center mb-2">Please Register</h1>
        <div className="login-input">
          <form>
            <div className="form-group pb-2 my-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
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

            <button type="button" class="btn-login my-2 mt-3">
              Register{" "}
            </button>
            <div className="">
              <span>Have a account?</span>
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regiser;
