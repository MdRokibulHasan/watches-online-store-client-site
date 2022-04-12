import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const [specificDetail, setSpecificDetail] = useState([]);

  useEffect(
    () =>
      fetch("/output (1).json")
        .then((res) => res.json())
        .then((data) => {
          setDetails(data);
        }),

    []
  );
  //   useEffect(() => {
  //     if (details.length > 0) {
  //       const matchedData = details?.filter((detail) => detail._id == id);
  //       setSpecificDetail(matchedData);
  //     }
  //   }, [details]);

  return (
    <div className="pd-section">
      <div className="container">
        <div className="pd-content">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="pd-image">
                <img src={details.image} alt="Image"></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="pd-title">
                <h4>Name</h4>
                <p>Price:</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
