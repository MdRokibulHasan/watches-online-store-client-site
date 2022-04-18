import React, { createContext } from "react";
import useCart from "../Components/Hooks/useCart/useCart";
import useFirebase from "../Components/Hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  const { addToCart, selectProduct, remove, checkOut } = useCart();
  const data = {
    allContexts,
    addToCart,
    selectProduct,
    remove,
    checkOut,
  };
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
