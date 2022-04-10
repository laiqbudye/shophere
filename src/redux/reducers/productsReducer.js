import { productConstants } from "../constants/productConstants";

const initialState = {
  loading: false,
  productList: [],
  error: [],
  currentProduct: {},
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET ALL PRODUCTS
    case productConstants.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        productList: [],
      };

    case productConstants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };

    case productConstants.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // GET A SINGLE PRODUCT BY ID
    case productConstants.GET_PRODUCT:
      return {
        ...state,
        loading: true,
        currentProduct: {},
      };

    case productConstants.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentProduct: action.payload,
      };

    case productConstants.GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
