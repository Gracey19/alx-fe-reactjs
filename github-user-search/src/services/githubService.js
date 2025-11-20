import axios from "axios";

// Read the API key from .env
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Looks like we can't find the user");
  }
}

