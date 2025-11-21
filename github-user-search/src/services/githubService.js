import axios from "axios";

// 1. Function to fetch a single user (Basic Search)
export async function fetchUserData(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    // Return the single user object directly
    return response.data;
  } catch (error) {
    // If the username doesn't exist, GitHub API returns 404
    if (error.response && error.response.status === 404) {
      throw new Error(`User not found: ${username}`);
    }
    throw new Error("An unexpected error occurred while fetching user data.");
  }
}

// 2. Function for Advanced Search
export async function advancedSearchUsers(username, location, minRepos) {
  try {
    // Build query string
    let query = "";
    // Note: GitHub search uses 'user' keyword for searching usernames
    if (username) query += `user:${username} `; 
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    // GitHub Search API returns items[]
    return response.data.items; 
  } catch (error) {
    // Note: It's better to throw the error object or a specific message
    throw new Error("Looks like we can't find the user or the search failed.");
  }
}

