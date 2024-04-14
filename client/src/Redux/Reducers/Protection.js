import { logoutAction } from "../Actions/userActions";

export const ErrorAction = (error, dispatch, action) => {
  const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  if (message === "Not authorized, token faailed") {
    dispatch(logoutAction());
  }
  return dispatch({ type: action, payload: message });
};
