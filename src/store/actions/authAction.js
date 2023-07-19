import { message } from "antd";
import axios from "axios";
import setAuthToken from "../../../src/components/config/setAuthToken";
import { BASE_URL } from "../../../src/components/config/web-config";
import * as actionTypes from "../action";

export const actionLogin =
  (userData, navigate) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.LOGIN_LOADING, payload: true });
    try {
      let result = await axios.post(`${BASE_URL}/auth/login`, userData);
      dispatch({ type: actionTypes.LOGIN_LOADING, payload: false });
      if (parseInt(result.data.status) === 200) {
        const { access_token } = result.data.data;
        setAuthToken(access_token);
        dispatch({
          type: actionTypes.USER_PROFILE_DATA,
          payload: result.data.data.user,
        });
        message.success(result.data.message, 5);
        navigate && setTimeout(() => navigate(`/`), 1000);
      } else message.error(result.data.message, 5);
    } catch (error) {
      message.error(error.response.data.message, 5);
      dispatch({ type: actionTypes.LOGIN_LOADING, payload: false });
    }
  };

export const actionGetUserProfile = () => async (dispatch) => {
  dispatch({ type: actionTypes.USER_PROFILE_LOADING, payload: true });
  try {
    let result = await axios.get(`${BASE_URL}/auth/me`);
    dispatch({ type: actionTypes.USER_PROFILE_LOADING, payload: false });
    if (parseInt(result.data.status) === 200) {
      dispatch({
        type: actionTypes.USER_PROFILE_DATA,
        payload: result.data.data,
      });
    } else message.error(result.data.message, 5);
  } catch (error) {
    if (error.response.data.message === "Unauthorized") {
      localStorage.removeItem("GrandealzBackendJwtToken");
      setAuthToken(false);
      window.location.replace("/login");
    }
    dispatch({ type: actionTypes.USER_PROFILE_LOADING, payload: false });
  }
};

export const logoutUser = (navigate) => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("GrandealzBackendJwtToken");
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch({ type: actionTypes.USER_PROFILE_DATA, payload: {} });
  navigate("/login");
};

export const actionUpdateUserProfile =
  (userData, id) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.UPDATE_PROFILE_LOADING, payload: true });
    try {
      let result = await axios.put(`${BASE_URL}/auth`, userData);
      dispatch({ type: actionTypes.UPDATE_PROFILE_LOADING, payload: false });
      if (parseInt(result.data.status) === 200) {
        dispatch({
          type: actionTypes.USER_PROFILE_DATA,
          payload: result.data.data,
        });
        message.success(result.data.message, 5);
      } else message.error(result.data.message, 5);
    } catch (error) {
      message.error(error.message, 5);
      dispatch({ type: actionTypes.UPDATE_PROFILE_LOADING, payload: false });
    }
  };
export const actionUploadFile = (formData) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.UPLOAD_PIC_LOADING, payload: true });
  try {
    let result = await axios.post(`${BASE_URL}/upload-file`, formData, {
      mode: "no-cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: actionTypes.UPLOAD_PIC_LOADING, payload: false });
    if (parseInt(result.data.status) === 200) {
      dispatch({
        type: actionTypes.UPLOAD_PIC_DATA,
        payload: result.data.data,
      });
    } else message.error(result.data.message, 5);
  } catch (error) {
    message.error(error.message, 5);
  }
};

export const actionForgotPassword =
  (userData, navigate) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.FORGOT_PASSWORD_LOADER, payload: true });
    try {
      let result = await axios.post(
        `${BASE_URL}/auth/forgote-password`,
        userData
      );
      dispatch({ type: actionTypes.FORGOT_PASSWORD_LOADER, payload: false });
      if (parseInt(result.data.status) === 200) {
        message.success(result.data.message, 5);
        navigate && setTimeout(() => navigate(`/login`), 1000);
      } else message.error(result.data.message, 5);
    } catch (error) {
      message.error(error.message, 5);
    }
  };

export const actionChangePassword =
  (userData, reset) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_LOADER, payload: true });
    try {
      let result = await axios.post(
        `${BASE_URL}/auth/change-password`,
        userData
      );
      dispatch({ type: actionTypes.CHANGE_PASSWORD_LOADER, payload: false });
      if (parseInt(result.data.status) === 200) {
        message.success(result.data.message, 5);
        reset();
      } else message.error(result.data.message, 5);
    } catch (error) {
      message.error(error.message, 5);
    }
  };

export const actionResetPassword =
  (userData, form) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.RESET_PASSWORD_LOADER, payload: true });
    try {
      let result = await axios.post(
        `${BASE_URL}/auth/reset-password`,
        userData
      );
      dispatch({ type: actionTypes.RESET_PASSWORD_LOADER, payload: false });
      if (parseInt(result.data.status) === 200) {
        message.success(result.data.message, 5);
        form && form.resetFields();
      } else message.error(result.data.message, 5);
    } catch (error) {
      message.error(error.message, 5);
      dispatch({ type: actionTypes.RESET_PASSWORD_LOADER, payload: false });
    }
  };
