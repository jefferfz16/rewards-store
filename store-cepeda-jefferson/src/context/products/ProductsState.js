import React, { useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import ProductsContext from "./ProductsContext";
import axios from "axios";

export default function ProductsState(props) {
  const initialProducts = {
    products: [],
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialProducts);

  const getProducts = async () => {
    const url = "https://coding-challenge-api.aerolab.co/products";
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    };
    const res = await axios.get(url, {headers});
    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data
    })
  };

  return (
    <ProductsContext.Provider value={{
        products: state.products,
        getProducts,
    }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
