import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Flashcards App</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-600 px-6 py-2 rounded shadow hover:bg-gray-100 cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-indigo-700 px-6 py-2 rounded shadow hover:bg-indigo-800 cursor-pointer"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
