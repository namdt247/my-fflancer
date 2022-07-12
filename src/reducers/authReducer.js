import { authActionTypes } from '../actions/types/authActionTypes';

const initialState = {
  message: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_SUBMIT:
      return {
        type: authActionTypes.LOGIN_SUBMIT,
      }
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...action,
      };
    case authActionTypes.LOGIN_FAILED:
      return {
        ...action,
      };
    case authActionTypes.LOGOUT_SUBMIT:
      return {
        type: authActionTypes.LOGOUT_SUBMIT,
      };
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...action,
      };
    case authActionTypes.LOGOUT_FAILED:
      return {
        ...action,
      };
    default:
      return state;
  }
};

export default authReducer;
