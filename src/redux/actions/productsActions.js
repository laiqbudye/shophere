import axios from "axios";
import { productConstants } from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: productConstants.GET_PRODUCTS,
    });

    const { data } = await axios.get("http://localhost:3000/products");

    dispatch({
      type: productConstants.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.GET_PRODUCTS_FAILED,
    });
  }
};

export const getProduct = (product_id) => async (dispatch) => {
  try {
    dispatch({
      type: productConstants.GET_PRODUCT,
    });

    const { data } = await axios.get(
      `http://localhost:3000/products/${product_id}`
    );

    dispatch({
      type: productConstants.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productConstants.GET_PRODUCT_FAILED,
    });
  }
};
