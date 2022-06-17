import { userActionTypes } from './types/userActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const userActions = {
  getInfoUser: () => ({
    type: userActionTypes.GET_INFO_USER,
  }),
};
