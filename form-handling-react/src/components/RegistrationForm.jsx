// src/components/RegistrationForm.jsx
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Basic validation: require all fields
  const validate = () => {
  const newErrors = {};
  if (!username) {
    newErrors.username = "Username is required";
  }
  if (!email) {
    newErrors.email = "Email is required";
  }
  if (!password) {
    newErrors.password = "Password is required";
  }
  return newErrors;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Simulate calling a mock API endpoint for registration
    try {
      // Example: using reqres.in to simulate POST
      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          username
        })
      });

      if (!res.ok) {
        // In a real app, parse server errors
        setStatus({ type: "error", message: "Registration failed (mock API). Check inputs." });
        return;
      }

      const data = await res.json();
      setStatus({ type: "success", message: `Registered! Mock token: ${data?.token || "N/A"}` });

      // Reset form (optional)
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <h2>Controlled Registration Form</h2>

      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
        {errors.username && (
          <div style={{ color: "crimson", fontSize: 13 }}>{errors.username}</div>
        )}
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
        {errors.email && (
          <div style={{ color: "crimson", fontSize: 13 }}>{errors.email}</div>
        )}
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
        {errors.password && (
          <div style={{ color: "crimson", fontSize: 13 }}>{errors.password}</div>
        )}
      </label>

      <button type="submit" style={{ padding: "10px 14px", cursor: "pointer" }}>
        Register
      </button>

      {status && (
        <div
          style={{
            marginTop: 8,
            padding: "8px 12px",
            background: status.type === "success" ? "#e6ffed" : "#ffe6e6",
            border: "1px solid #ccc"
          }}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}

export default RegistrationForm;

