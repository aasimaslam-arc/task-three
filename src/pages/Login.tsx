import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const user = storedUsers.find(
      (u: any) => u.email === email && u.password === password
    );

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("currentUser", JSON.stringify({ email }));
      navigate("/dashboard");
    } else if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <div className="bg-white text-black rounded-lg p-6 w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>

        <p className="text-sm text-center mt-2">
          <Link
            to="/forgot-password"
            className="text-indigo-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </p>

        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
