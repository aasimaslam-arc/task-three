import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleResetRequest = () => {
    alert(
      `Password reset request received for ${email}.
Please contact the admin to reset your password.`
    );
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
      <div className="bg-white text-black rounded-lg p-6 w-80 space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <button
          onClick={handleResetRequest}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Request Reset
        </button>
      </div>
    </div>
  );
}
