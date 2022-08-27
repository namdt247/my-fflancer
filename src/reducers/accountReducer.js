import { userActionTypes } from "../actions/types/userActionTypes";

const initialState = {
  message: '',
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.GET_LIST_ACCOUNT:
      return {
        type: userActionTypes.GET_LIST_ACCOUNT,
      };
    case userActionTypes.GET_LIST_ACCOUNT_SUCCESS:
      return {
        ...action,
      };
    case userActionTypes.GET_LIST_ACCOUNT_FAILED:
      return {
        ...action,
      };
    case userActionTypes.ADD_ACCOUNT:
      return {
        type: userActionTypes.ADD_ACCOUNT,
      };
    case userActionTypes.ADD_ACCOUNT_SUCCESS:
      return {
        ...action,
      };
    case userActionTypes.ADD_ACCOUNT_FAILED:
      return {
        ...action,
      };
    case userActionTypes.DETAIL_ACCOUNT:
      return {
        type: userActionTypes.DETAIL_ACCOUNT,
      };
    case userActionTypes.DETAIL_ACCOUNT_SUCCESS:
      return {
        ...action,
      };
    case userActionTypes.DETAIL_ACCOUNT_FAILED:
      return {
        ...action,
      };
    case userActionTypes.UPDATE_ACCOUNT:
      return {
        type: userActionTypes.UPDATE_ACCOUNT,
      };
    case userActionTypes.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...action,
      };
    case userActionTypes.UPDATE_ACCOUNT_FAILED:
      return {
        ...action,
      };
    case userActionTypes.DELETE_ACCOUNT:
      return {
        type: userActionTypes.DELETE_ACCOUNT,
      };
    case userActionTypes.DELETE_ACCOUNT_SUCCESS:
      return {
        ...action,
      };
    case userActionTypes.DELETE_ACCOUNT_FAILED:
      return {
        ...action,
      };
    default:
      return state;
  }
};

export default accountReducer;