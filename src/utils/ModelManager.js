import Constants from './Constants';

class ModelManager {
  static token = '';
  static userName = '';
  static userId = '';

  constructor() {
    this.token = localStorage.getItem(Constants.StorageKey.KEY_TOKEN);
    this.userName = localStorage.getItem(Constants.StorageKey.KEY_USER_NAME);
    this.userId = localStorage.getItem(Constants.StorageKey.KEY_USER_ID);
  }

  setToken = async (token) => {
    try {
      this.token = token;
      await localStorage.setItem(Constants.StorageKey.KEY_TOKEN, token);
    } catch (error) {
      console.log(error);
    }
  };

  setUserName = async (userName) => {
    try {
      this.userName = userName;
      await localStorage.setItem(Constants.StorageKey.KEY_USER_NAME, userName);
    } catch (error) {
      console.log(error);
    }
  };

  setUserId = async (userId) => {
    try {
      this.userId = userId;
      await localStorage.setItem(Constants.StorageKey.KEY_USER_ID, userId);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line class-methods-use-this
  useAuth = () => {
    const token = localStorage.getItem(Constants.StorageKey.KEY_TOKEN);
    return !!token;
  }

  clearLocalStorage = () => {
    localStorage.removeItem(Constants.StorageKey.KEY_TOKEN);
    localStorage.removeItem(Constants.StorageKey.KEY_USER_NAME);
    localStorage.removeItem(Constants.StorageKey.KEY_USER_ID);
    // this.setToken(null);
  };
}

export default new ModelManager();
