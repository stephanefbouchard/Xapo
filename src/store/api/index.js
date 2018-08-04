import config from '../../config'
import { get } from '../helpers/apiHelper';

export const getRepositories = organizationName => {
  return get(`${config.GITHUB_API_URL}/orgs/${organizationName}/repos`);
};

export const getRepositoryContributors = (organizationName, repositoryName) => {
  return get(`${config.GITHUB_API_URL}/repos/${organizationName}/${repositoryName}/contributors`);
};