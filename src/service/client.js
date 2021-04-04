import axios from 'axios';

export const searchClient = axios.create({
  baseURL: 'https://api.npms.io/v2/',
});

export const defaultClient = axios.create({
  baseURL: 'https://data.jsdelivr.com/v1/',
});

export default {
  searchClient,
  defaultClient,
};
