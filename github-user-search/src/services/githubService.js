import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async (params, page = 1) => {
  const { username, location, minRepos } = params;
  let query = username;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get(GITHUB_API_BASE_URL, {
      params: {
        q: query,
        per_page: 30,
        page: page,
      },
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
