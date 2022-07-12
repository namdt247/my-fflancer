import { authActionTypes } from './types/authActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const authActions = {
  postLogin: (payload) => ({
    type: authActionTypes.LOGIN_SUBMIT,
    params: payload,
  }),
  postLogout: () => ({
    type: authActionTypes.LOGOUT_SUBMIT,
  }),
};
