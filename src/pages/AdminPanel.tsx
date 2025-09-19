import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState<any[]>([]);
  const [categories] = useState(["Verbs", "Nouns", "Adjectives"]);

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const saveUsers = (updatedUsers: any[]) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleToggleCategory = (email: string, category: string) => {
    const updatedUsers = users.map((u: any) => {
      if (u.email === email) {
        const hasCategory = u.categories?.includes(category);
        return {
          ...u,
          categories: hasCategory
            ? u.categories.filter((c: string) => c !== category) 
            : [...(u.categories || []), category],
        };
      }
      return u;
    });
    saveUsers(updatedUsers);
  };

  const handleDeleteUser = (email: string) => {
    const updatedUsers = users.filter((u: any) => u.email !== email);
    saveUsers(updatedUsers);
  };

  const handleResetPassword = (email: string) => {
    const updatedUsers = users.map((u: any) =>
      u.email === email ? { ...u, password: "newpass123" } : u
    );
    saveUsers(updatedUsers);
    alert(`Password for ${email} has been reset to "newpass123"`);
  };

  const handleAddUser = () => {
    if (!newEmail || !newPassword) return;
    if (users.find((u) => u.email === newEmail)) return;

    const updatedUsers = [
      ...users,
      { email: newEmail, password: newPassword, categories: [] },
    ];
    saveUsers(updatedUsers);
    setNewEmail("");
    setNewPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="bg-white text-black rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border px-3 py-2 rounded w-full"
          />
          <button
            onClick={handleAddUser}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white text-black rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.email}
                className="border rounded p-4 flex flex-col space-y-2"
              >
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Categories:</strong>{" "}
                  {user.categories?.join(", ") || "None"}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((cat) => {
                    const isActive = user.categories?.includes(cat);
                    return (
                      <button
                        key={cat}
                        onClick={() => handleToggleCategory(user.email, cat)}
                        className={`px-3 py-1 rounded transition ${
                          isActive
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-black hover:bg-gray-400"
                        }`}
                      >
                        {isActive ? `Deactivate ${cat}` : `Activate ${cat}`}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handleResetPassword(user.email)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Reset Password
                  </button>

                  <button
                    onClick={() => handleDeleteUser(user.email)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete Account
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
