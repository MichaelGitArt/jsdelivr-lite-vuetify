import { defaultClient, searchClient } from './client';

const findPackages = ({ query, page = 1 }) => {
  return searchClient.get('search', {
    params: {
      q: query,
      from: 10 * (page - 1),
      size: 10,
    },
  });
};

const fetchVersions = packageName => {
  return defaultClient.get(`package/npm/${packageName}`);
};

const fetchVersionFiles = (packageName, version) => {
  return defaultClient.get(`package/npm/${packageName}@${version}`);
};

export default {
  findPackages,
  fetchVersions,
  fetchVersionFiles,
};
