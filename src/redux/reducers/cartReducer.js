import { cartConstants } from "../constants/cartConstants";

const initialState = {
  loading: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_ITEM:
      const product = action.payload;

      const alreadyExist = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (alreadyExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? product : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, product],
        };
      }

    case cartConstants.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
