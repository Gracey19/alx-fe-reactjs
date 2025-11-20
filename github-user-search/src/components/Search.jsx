import { useState } from "react";
import { fetchUserData, advancedSearchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

   try {
  if (location || minRepos) {
    // Advanced search (Task 2)
    const data = await advancedSearchUsers(username, location, minRepos);
    setUsers(data);
  } else {
    // Basic search (Task 1 requirement)
    const userData = await fetchUserData(username);
    setUsers([userData]); // wrap in array so it displays like your advanced results
  }
} catch (err) {
  setError("Looks like we cant find the user");
} finally {
  setLoading(false);
}
}

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="mt-4 space-y-2">
        {users.map((user) => (
          <div key={user.id} className="border p-2 rounded">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="w-20 h-20 rounded"
              loading="lazy"
            />
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

