import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../useFirebase";

const useCart = () => {
  const [selectProduct, setSelectProduct] = useState([]);
  const { user } = useFirebase();
  const { uid, displayName, email } = user;
  const history = useNavigate();
  // console.log(uid);
  useEffect(() => {
    fetch(`https://immense-lowlands-46905.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectProduct(data);
        }
      });
  }, [uid]);

  function addToCart(product) {
    const isHave = selectProduct.find((selected) => selected._id == product._id);
    product.uid = uid;
    product.status = "Pending";
    product.username = displayName;
    product.email = email;
    product.quantity = 1;
    if (isHave) {
      alert("Product has been Selected");
    } else {
      fetch("https://immense-lowlands-46905.herokuapp.com/product/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelected = [...selectProduct, product];
            setSelectProduct(newSelected);
            alert("Added Product");
          }
        });
    }
  }

  function remove(id) {
    fetch(`https://immense-lowlands-46905.herokuapp.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount == 1) {
          const newSelecteion = selectProduct?.filter((product) => product._id !== id);
          setSelectProduct(newSelecteion);
          alert("Product Delete");
        } else {
          alert("Somthing wrong");
        }
      });
    // console.log(id);
  }

  function checkOut() {
    fetch(`https://immense-lowlands-46905.herokuapp.com/purchase/${uid}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setSelectProduct([]);
        } else {
          alert("Somthing Worng");
        }
      });
  }

  return { checkOut, remove, addToCart, selectProduct };
};

export default useCart;
