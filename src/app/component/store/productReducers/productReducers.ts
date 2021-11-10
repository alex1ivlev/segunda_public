import { Actions, ActionTypes } from '../productActions/productActions';

export const initialState = {
  items: [],
  cart: [],
};

export function ProductReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload],
      };
    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
   //Add Remove from cart

    default:
      return state;
  }
}
