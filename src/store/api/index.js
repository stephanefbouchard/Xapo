import config from '../../config'
import { get } from '../helpers/apiHelper';

export const getRepositories = organizationName => {
  return get(`${config.GITHUB_API_URL}/orgs/${organizationName}/repos`);
};