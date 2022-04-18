import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch("https://immense-lowlands-46905.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  // const getStatus = (status) => {
  //   return status == 1 ? "Pendding" : "Shipping";
  // };
  function handleDelete(id) {
    // console.log(id);
    const confirmation = window.confirm("Are you sure to Delete!!");
    if (confirmation) {
      const url = `https://immense-lowlands-46905.herokuapp.com/delete/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount === 1) {
            alert("Delete Successfully");
            const remaining = orders.filter((iteam) => iteam._id !== id);
            setOrders(remaining);
          } else {
            alert("Something is wrong");
          }
        });
    }
  }
  function handleConfirm(id) {
    const confirmation = window.confirm("Are you sure to Confirm!!");
    if (confirmation) {
      fetch(`https://immense-lowlands-46905.herokuapp.com/confirmation/${id}`, {
        method: "put",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            alert("Confirmation Successfully");
          } else {
            alert("Something is wrong");
          }
        });
    }
  }
  return (
    <div className="mt-5">
      <h1>Manage Order</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>

            <th scope="col">Products</th>

            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((iteam, index) => (
            <tr key={iteam._id}>
              <td>{index + 1}</td>
              <td>{iteam.username}</td>
              <td>{iteam.email}</td>

              <td className="text-uppercase">{iteam.title}</td>

              <td>{iteam.status}</td>
              <td>
                <button onClick={() => handleConfirm(iteam._id)}>Confirm</button>
                <button onClick={() => handleDelete(iteam._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
