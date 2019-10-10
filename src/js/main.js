'use strict';

import githubService from '../services/GithubService.js';

const main = () => {
  document.getElementById('searchButton').addEventListener('click', event => {
    const username = document.getElementById('searchInput').value;
    githubService.getUser(username)
      .then(response => {
        console.log(response)
      })

  })
}

window.addEventListener('load', main);