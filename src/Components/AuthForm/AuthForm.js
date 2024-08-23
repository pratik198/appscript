import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const generateToken = () => {
    return Math.random().toString(36).substr(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem(email));

      if (storedUser && storedUser.password === password) {
        const token = generateToken();
        localStorage.setItem("jwt", token);
        setSuccess("Login successful! Token generated and stored.");
        setError("");
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
    } else {
      const existingUser = localStorage.getItem(email);
      if (existingUser) {
        setError("User already exists with this email.");
        return;
      }

      const newUser = {
        username,
        email,
        password,
      };

      localStorage.setItem(email, JSON.stringify(newUser));
      setSuccess("Signup successful! You can now log in.");
      setError("");
      setIsLogin(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleFormSubmit} style={styles.form}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={!isLogin}
              style={styles.input}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <p
          style={styles.toggleText}
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
            setSuccess("");
          }}
        >
          {isLogin
            ? "New user? Sign up here"
            : "Already have an account? Login here"}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "12px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "#ff0000",
    marginTop: "10px",
  },
  success: {
    color: "#008000",
    marginTop: "10px",
  },
  toggleText: {
    color: "#007BFF",
    textAlign: "center",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default AuthForm;
