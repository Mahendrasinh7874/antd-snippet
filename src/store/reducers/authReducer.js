import * as actionTypes from "../action";

const initialState = {
  LoginLoader: false,
  userProfileData: {},
  uploadLoader: false,
  PictureData: {},
  updateProfileLoader: false,
  forgotPasswordLoader: false,
  forgotPasswordLoader: false,
  changePasswordLoader: false,
  resetPasswordLoader: false,
  coupanDetailLoader: false,
  coupanDetailData: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_LOADING:
      return { ...state, LoginLoader: action.payload };

    case actionTypes.FORGOT_PASSWORD_LOADER:
      return { ...state, forgotPasswordLoader: action.payload };

    case actionTypes.CHANGE_PASSWORD_LOADER:
      return { ...state, changePasswordLoader: action.payload };

    case actionTypes.FORGOT_PASSWORD_LOADER:
      return { ...state, forgotPasswordLoader: action.payload };

    case actionTypes.RESET_PASSWORD_LOADER:
      return { ...state, resetPasswordLoader: action.payload };

    case actionTypes.USER_PROFILE_DATA:
      return { ...state, userProfileData: action.payload };

    case actionTypes.UPDATE_PROFILE_LOADING:
      return { ...state, updateProfileLoader: action.payload };

    case actionTypes.UPLOAD_PIC_LOADING:
      return { ...state, uploadLoader: action.payload };

    case actionTypes.UPLOAD_PIC_DATA:
      return { ...state, PictureData: action.payload };


    default:
      return state;
  }
};
export default authReducer;
