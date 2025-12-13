import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome! Navigate to Profile or Blog.</p>
      <nav>
        <ul>
          <li><Link to="/profile/details">Go to Profile Details</Link></li>
          <li><Link to="/profile/settings">Go to Profile Settings</Link></li>
          <li><Link to="/blog/123">Go to Blog Post 123</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

