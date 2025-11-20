import axios from "axios";

export async function advancedSearchUsers(username, location, minRepos) {
  try {
    // Build query string
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items; // GitHub Search API returns items[]
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
}

