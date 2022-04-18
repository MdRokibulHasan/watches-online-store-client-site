import React, { useEffect, useState } from "react";
import Rating from "react-rating";
const ShowReviews = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://immense-lowlands-46905.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <div className="review-title">
        <h1 className="text-center">User's Feedback</h1>
      </div>
      <div className="row">
        {reviews?.map((pd) => {
          const { rating, description, username } = pd;
          console.log(pd);
          return (
            <div key={pd._id} className="col-lg-4 col-md-4 col-12">
              <div class="card text-center m-2" style={{ heigth: "20px" }}>
                <div class="card-body">
                  <h4>
                    <Rating
                      initialRating={rating}
                      emptySymbol="far fa-star text-warning "
                      fullSymbol="fas fa-star text-warning "
                      readonly
                    />
                  </h4>

                  <p class="card-text text-center">{username}</p>

                  <div>
                    <p className="text-center"> {description} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowReviews;
