import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  shopItems: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};