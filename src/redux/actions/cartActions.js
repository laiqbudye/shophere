import axios from "axios";
import { cartConstants } from "../constants/cartConstants";

export const adddToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:3000/products/${id}`);

  dispatch({
    type: cartConstants.ADD_ITEM,
    payload: { ...data, qty: qty },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: cartConstants.REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
