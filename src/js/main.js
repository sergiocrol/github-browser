'use strict';

import githubService from '../services/GithubService.js';
import UserInfo from '../components/UserInfo.js';
import load from '../helpers/loadingHelper.js';


const main = () => {
  document.getElementById('search-box-button').addEventListener('click', event => {
    const username = document.getElementById('search-box-input').value;
    load('.result-box', 'loading');

    githubService.getUser(username)
      .then(response => {
        if (response.message === 'Not Found') {
          document.querySelector('.result-box').innerHTML = `
          <img src="src/images/waldocat.png" alt="Waldocat"/>
          <p class="empty">Does not exist :(</p>
          `;
        } else {
          UserInfo(response);
        }
      })
      .catch(error => {
        console.log(error)
      })

  })
}

window.addEventListener('load', main);