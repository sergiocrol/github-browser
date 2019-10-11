'use strict';

import UserRepos from './UserRepos.js';

const UserInfo = (user) => {
  const { login, name, bio, avatar_url, html_url } = user;
  document.querySelector('.result-box').innerHTML = `
    <div class="result-box-card">
      <section class="result-box-card-info">
        <img src=${avatar_url} alt="${login} avatar">
        <div>
          <h2><a href="${html_url}">@${login}</a></h2>
          <h1>${name === null ? login : name}</h1>
          <p>${bio === null ? 'this is the bio...' : bio}</p>
        </div>
      </section>
      <section class="result-box-card-repos">
        <h2>repositories</h2>
        <div class="repositories"></div>
      </section>
    </div>
  `;
  UserRepos(login);
};

export default UserInfo;