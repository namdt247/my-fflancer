import { authActionTypes } from '../requests/api/authApi';

// eslint-disable-next-line import/prefer-default-export
export const authActions = {
  postLogin: (payload) => ({
    type: authActionTypes.LOGIN_SUBMIT,
    payload,
  }),
  postLogout: () => ({
    type: authActionTypes.LOGOUT_SUBMIT,
  }),
};
