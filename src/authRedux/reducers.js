import { combineReducers } from "redux";

function authReducer(state = null, action) {
  switch (action.type) {
    case "auth/loginSuccess":
      return {
        user: action.payload,
        loginError: false,
      };

    case "auth/loginFailure":
      return {
        ...state,
        // user: null
        loginError: true,
      };

    case "auth/logout":
      return {
        user: null,
        loginError: false,
      };

    default:
      return state;
  }
}

function usersReducer(state = null, action) {
  switch (action.type) {
    case "users/request":
      return {
        ...state,
        status: "loading",
      };

    case "users/success":
      return {
        data: action.payload,
        status: "success",
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});
