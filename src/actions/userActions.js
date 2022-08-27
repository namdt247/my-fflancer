import { userActionTypes } from './types/userActionTypes';

export const userActions = {
  getInfoUser: () => ({
    type: userActionTypes.GET_INFO_USER,
  }),

  getLisAccount: (params) => {
    return {
      type: userActionTypes.GET_LIST_ACCOUNT,
      params,
    };
  },
  addAccount: (params) => {
    return {
      type: userActionTypes.ADD_ACCOUNT,
      params
    };
  },
  detailAccount: (params) => {
    return {
      type: userActionTypes.DETAIL_ACCOUNT,
      params,
    };
  },
  updateAccount: (params) => {
    return {
      type: userActionTypes.UPDATE_ACCOUNT,
      params,
    };
  },
  deleteAccount: (params) => {
    return {
      type: userActionTypes.DELETE_ACCOUNT,
      params,
    };
  },
};
