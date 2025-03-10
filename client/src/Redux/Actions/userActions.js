import * as userConstants from "../Constants/userConstants";
import * as userApi from "../APIs/userServices";
import { toast } from "react-hot-toast";
import { ErrorAction, tokenProtection } from "../Reducers/Protection";

// Login action
const loginAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });
    const response = await userApi.loginService(datas);
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    toast.success("Logged in successfully");
  } catch (error) {
    ErrorAction(error, dispatch, userConstants.USER_LOGIN_FAIL);
  }
};

// register action
const registerAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const response = await userApi.loginService(datas);
    dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: response });
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    toast.success("Registered successfully");
  } catch (error) {
    ErrorAction(error, dispatch, userConstants.USER_REGISTER_FAIL);
  }
};

// logout action
const logoutAction = () => (dispatch) => {
  userApi.loginService();
  dispatch({ type: userConstants.USER_LOGOUT });
  dispatch({ type: userConstants.USER_LOGIN_RESET });
  dispatch({ type: userConstants.USER_REGISTER_REQUEST });
};

// update profile action
const updateProfileAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: userConstants.USER_UPDATE_PROFILE_REQUEST });
    const response = await userApi.updateProfileService(
      user,
      tokenProtection(getState)
    );
    dispatch({
      type: userConstants.USER_UPDATE_PROFILE_SUCCESS,
      payload: response,
    });
    toast.success("Profile Updated");
    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorAction(error, dispatch, userConstants.USER_UPDATE_PROFILE_FAIL);
  }
};

export { loginAction, registerAction, logoutAction, updateProfileAction };
