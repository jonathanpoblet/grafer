import { createSlice } from "@reduxjs/toolkit";
import { getRequest, putRequest } from "../../services/httpRequest";


export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    tool:[]
  },
  reducers: {
    setProducts:(state,action) => {
      state.products = action.payload
    },
    setTool: (state,action) => {
      state.tool = action.payload
    }
  }
});

export const { setProducts,setTool } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async dispatch => {
  const products  = await getRequest("/api/products");
  try {
    await dispatch(setProducts(products));
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

export const addProductToCollection = product => async dispatch => {
  try {
    await putRequest(`/api/products/addProduct`,'',product)
    return true
  } catch (error) {
    console.log(error);
  }
}