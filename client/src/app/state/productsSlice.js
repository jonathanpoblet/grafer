import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest";


export const productSlice = createSlice({
  name: "products",
  initialState: {
        list: "",
        detail: ""
    }
//   ,
//   reducers: {
    
//   }
});

// export const { } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async dispatch => {
  try {
    const { products } = await getRequest("/products/?items=15");
    dispatch(setProductsList(products));
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = id => async dispatch => {
  try {
    const { product } = await getRequest(`/products/${id}`);
    dispatch(setDetailProduct(product));
  } catch (error) {
    console.log(error);
  }
};