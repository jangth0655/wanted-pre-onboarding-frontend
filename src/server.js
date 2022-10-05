export const BASE_URL = process.env.REACT_APP_SERVER;

export const setLocalStorage = ({ name, value }) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = ({ name }) => {
  return localStorage.getItem(name);
};