// users:[],


import { initialState } from "../store";
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
        return {
          ...state,
          users: action.payload,
        };
     default:
                return state;
  
  }
}
