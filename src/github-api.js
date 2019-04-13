import axios from "axios";

// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

export { getRepos, getOrgs, getUserData, getOrgData };

function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url)
    .then(response => response.data)
}

function getOrgs(username) {
  const url = `${BASE_URL}/users/${username}/orgs?per_page=250`;
  return axios.get(url)
    .then(response => response.data)
}

function getUserData(username) {
  const url = `${BASE_URL}/users/${username}`
  return axios.get(url)
    .then(response => response.data)
}

function getOrgData(org) {
  const url = `${BASE_URL}/orgs/${org}`
  return axios.get(url)
    .then(response => response.data)
}
