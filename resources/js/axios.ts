/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
const config = {
  baseURL: process.env.MIX_VUE_API_URL || '',
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const localAxios = axios.create(config);

localAxios.interceptors.request.use(
  (config) =>
    // Do something before request is sent
    config,
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
localAxios.interceptors.response.use(
  (response) =>
  // Do something with response data
    response.data,
  (error) =>
  // Do something with response error
    Promise.reject(error),
);

export default localAxios;
