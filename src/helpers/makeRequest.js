import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.instantwebtools.net",
});
apiClient.defaults.timeout = 1000 * 15;

// auth
export const get = async (url, params) => {
  return await apiClient
    .get(url, { params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error?.response;
    });
};

export const post = async (url, data) => {
  return await apiClient
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error?.response;
    });
};
