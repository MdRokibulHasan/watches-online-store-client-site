import React, { useState } from "react";
import useAuth from "../../../Components/Hooks/useAuth";

const AddReviews = () => {
  const [reviews, setReviews] = useState({});
  const { allContexts } = useAuth();
  const { user } = allContexts;
  // console.log(user.email);
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewsdata = { ...reviews };
    newReviewsdata[field] = value;
    setReviews(newReviewsdata);
    // console.log(newReviewsdata);
  };
  const handleRegisterSubmit = (e) => {
    const info = {
      ...reviews,
      username: user.displayName,
      email: user.email,
    };

    fetch("https://immense-lowlands-46905.herokuapp.com/reviews", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // const newSelected = [...reviews];
          // setReviews(newSelected);
          alert("Added Reviews Successfully");
        } else {
          alert("Something wrong");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="container ">
      <div className="review-section">
        <div className="review-title m-5">
          <h1>Add Some Feedback</h1>
          <div className="review-input">
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group pb-2 my-3">
                <input
                  type="text"
                  name="name"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  defaultValue={user.displayName}
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
                  defaultValue={user.email}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="rating"
                  onChange={handelonchange}
                  className="form-control my-3"
                  id="exampleInputPassword1"
                  placeholder="Add Rating"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  onChange={handelonchange}
                  className="form-control my-3"
                  id="exampleInputPassword1"
                  placeholder="Short description "
                />
              </div>
              <button type="submit" class="btn-login my-2 mt-3">
                Add Review{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
