"use client";
import { forgotPassword } from "@/utils/api";
import { useState } from "react";

type Props = {
  onBack: () => void;
};

const ForgotPassword = ({ onBack }: Props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendReset = async () => {
    try {
        const success = await forgotPassword(email);
        if(success) {
            setMessage("Check your inbox for a reset link.");
        } else {
            setError("Something went wrong")
        }
    } catch (err: any) {
        setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-center">Reset your password</h2>
      <input
        className="border w-full mb-3 px-3 py-2 rounded"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-[#7C3AED] text-white w-full py-2 rounded mb-2"
        onClick={handleSendReset}
      >
        Send reset link
      </button>
      {message && <p className="text-green-600 text-sm text-center">{message}</p>}
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <p className="text-sm text-center mt-4">
        <button onClick={onBack} className="text-[#7C3AED] hover:underline">
          Back to Sign In
        </button>
      </p>
    </div>
  );
};

export default ForgotPassword;
