// src/services/githubService.js
export const searchUsers = async (username, location, minRepos) => {
  try {
    const query = `${username} in:login location:${location} repos:>${minRepos}`;
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
