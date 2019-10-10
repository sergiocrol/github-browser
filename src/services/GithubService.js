'use strict';

class GithubService {

  constructor() {
    this.baseURL = 'https://api.github.com/';
  }

  getUser = async username => {
    try {
      const response = await fetch(this.baseURL + `users/${username}`);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  getRepositories(userId) {

  }
}

const githubService = new GithubService();

export default githubService;