import * as endpoints from "./endpoints";
import { get, post } from "./makeRequest";

// Get Images
export const fetchAirlinesList = () => {
  return get(endpoints.airlineList);
};
export const fetchAirline = ({ id }) => {
  return get(`${endpoints.airlineList}${id}`);
};
export const createAirline = (payload) => {
  return post(endpoints.airlineList, payload);
};
