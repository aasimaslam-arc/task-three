import { Link, useNavigate } from "react-router-dom";

const categories = ["Verbs", "Nouns", "Adjectives"];

export default function Dashboard() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const unlockedCategories: string[] = currentUser?.categories || [];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-indigo-50 to-white p-8">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-700">
          Welcome, {currentUser?.email}
        </h2>

        <div className="flex items-center gap-3">
          {currentUser?.email === "admin@gmail.com" && (
            <a
              href="/admin"
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition cursor-pointer"
            >
              Admin Panel
            </a>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {categories.map((cat) => {
          const unlocked = unlockedCategories.includes(cat);

          return (
            <div
              key={cat}
              className={`relative rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ${
                unlocked ? "bg-white" : "bg-gray-200"
              }`}
            >
              <div className="p-6 flex flex-col items-center justify-center h-48">
                <h3 className="text-xl font-semibold mb-2">{cat}</h3>
                {unlocked ? (
                  <Link
                    to={`/category/${cat}`}
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    Start Learning
                  </Link>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500 flex items-center gap-2">
                      <span>🔒</span> Locked
                    </p>
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600">
                      Buy Now
                    </button>
                    <p className="text-xs text-gray-400">
                      Contact admin after payment
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
