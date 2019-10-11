'use strict';

const RepoInfo = (repository) => {
  const { name, html_url, forks, stargazers_count } = repository;
  const repositoryCard = `
  <a href="${html_url}">
    <section>
      <p id="repo-name">${name}</p>
      <div><img src="./images/star.png" alt="star icon"/>${stargazers_count}<img class="fork" src="./images/fork.png" alt="fork icon"/>${forks}</div>
    </section>
  </a>
  `;

  return repositoryCard;
}

export default RepoInfo;