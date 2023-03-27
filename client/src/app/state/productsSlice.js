import { createSlice } from "@reduxjs/toolkit";
import { getRequest, putRequest } from "../../services/httpRequest";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    tool: [],
    detail:{}
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTool: (state, action) => {
      state.tool = action.payload;
    },
    setDetail: (state,action) => {
      state.detail = action.payload
    }
  },
});

export const { setProducts, setTool, setDetail } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = () => async (dispatch) => {
  const products = await getRequest("/api/products");
  try {
    await dispatch(setProducts(products));
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = (id) => async (dispatch) => {
  try {
    const { product } = await getRequest(`/products/${id}`);
    await dispatch(setDetailProduct(product));
  } catch (error) {
    console.log(error);
  }
};

export const addProductToCollection = (product) => async (dispatch) => {
  try {
    const request = await putRequest(`/api/products/addProduct`, "", product);
    await dispatch(setProducts(request));
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductFromCollection = (productData) => async (dispatch) => {
  try {
    const request = await putRequest('/api/products/deleteProduct','', productData);
    await dispatch(setProducts(request));
    return true
  } catch (error) {
    console.log(error);
  }
}
