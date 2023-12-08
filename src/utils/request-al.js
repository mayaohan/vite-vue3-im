import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: '',
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  },
);

service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    return response;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  },
);

export const get = (url, params = {}) =>
  new Promise((resolve) => {
    service
      .get(url, params)
      .then((result) => {
        const res = result.data;
        resolve([null, res]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

export const post = (url, data, params = {}) => {
  return new Promise((resolve) => {
    service
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
