'use strict';

import githubService from '../services/GithubService.js';
import load from '../helpers/loadingHelper.js';
import RepoInfo from './RepoInfo.js';

const UserRepos = (userId) => {
  load('.repositories', 'loading-repos');
  githubService.getRepositories(userId)
    .then(response => {
      if (response.length === 0) {
        document.querySelector('.repositories').innerHTML = `<p class="loading-repos">No repositories</p>`
      } else {
        let repositories = document.querySelector('.repositories');
        repositories.innerHTML = '';
        response.map(rep => {
          repositories.innerHTML += RepoInfo(rep);
        })
      }
    })
    .catch(error => {
      console.log(error);
    })



}

export default UserRepos;