import React, { useState } from "react";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://immense-lowlands-46905.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          // setSuccess(true);
          alert("Make Admin Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="make-admin">
      <h1>Make A Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <div class="admin-input">
          <div className="input-group mb-3">
            <input type="email" onBlur={handleOnBlur} className="form-control" placeholder="Enter Make A Admin Email" />
          </div>
          <div className="admin-btn">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
              Make Admin
            </button>
          </div>
        </div>
      </form>
      {success && (
        <div class="alert alert-success" role="alert">
          Admin Make successful!
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
