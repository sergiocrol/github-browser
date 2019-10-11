'use strict';

class GithubService {

  constructor() {
    this.baseURL = 'https://api.github.com/users/';
  }

  getUser = async username => {
    try {
      const response = await fetch(this.baseURL + username);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  getRepositories = async userId => {
    try {
      const response = await fetch(this.baseURL + userId + '/repos?per_page=100');
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

const githubService = new GithubService();

export default githubService;