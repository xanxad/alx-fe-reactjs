import axios from "axios";

// Fetch user data from GitHub API
const fetchUser = async (username) => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY; // Access the API key
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${apiKey}`, // Include the API key in the request headers
    },
  });
  return response.data; // Return the user data
};

export default fetchUser; // Export the function for use in other files
