import { Actions, ActionTypes } from '../Actions/Actions';

export const initialState = {
  items: [],
  cart: [],
};

export function Reducer(state = initialState, action: Actions) {
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

    //case ActionTypes.Remove:
    //  return {
    //    ...state,
     //   cart: [...state.cart.filter((item) => item.id !== action.payload.id)
    //    ],
   //   };
    default:
      return state;
  }
}
