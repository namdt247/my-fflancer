import axios from 'axios';
import queryString from 'query-string';
import Constants from '../common/Constants';

const fetchAPI = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    timeout: Constants.TIMEOUT_REQUEST_API * 60 * 1000,
    paramsSerializer: (params) => queryString.stringify(params),
  });
};

const requestAPI = (url, method, params) => {
  switch (method) {
    case 'GET':
      return fetchAPI()
        .get(
          url,
          { params },
        );
    case 'POST':
      return fetchAPI()
        .post(url, params);
    case 'PUT':
      return fetchAPI()
        .put(url, params);
    case 'DELETE':
      return fetchAPI()
        .delete(
          url,
          { params },
        );
    default:
      break;
    }
  return null;
};

const requestDataAPI = async (url, method, params) => {
  try {
    const response = await requestAPI(url, method, params);
    if (response.status === 200) {
      return response.data;
    }
    return -1;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

const requestGetAPI = (url, params) => requestDataAPI(url, 'GET', params);

const requestPostAPI = (url, params) => requestDataAPI(url, 'POST', params);

const requestPutAPI = (url, params) => requestDataAPI(url, 'PUT', params);

const requestDeleteAPI = (url, params) => requestDataAPI(url, 'DELETE', params);

const API = {
  requestGetAPI,
  requestPostAPI,
  requestPutAPI,
  requestDeleteAPI,
}

export default API;
