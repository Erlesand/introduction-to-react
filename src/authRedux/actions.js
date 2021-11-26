import axios from "axios";

export const authLoginSuccess = (user) => ({
  type: "auth/loginSuccess",
  payload: user,
});

export const authLoginFailure = () => ({
  type: "auth/loginFailure",
});

export const authLogout = () => ({
  type: "auth/logout",
});

const usersRequest = () => ({
  type: "users/request",
});

const usersSuccess = (data) => ({
  type: "users/sucess",
  payload: data,
});

export const usersFetch = () => {
  return async (dispatch, getState) => {
    // perform any async task, such as fetching data, and use the dispatch method to manually dispatch regular actions to the store. The getState method returns the entire current Redux state.
    // TODO: Fetch users data.
    dispatch(usersRequest());

    const result = await axios("https://jsonplaceholder.cypress.io/users");
    dispatch(usersSuccess(result.data));
  };
};
