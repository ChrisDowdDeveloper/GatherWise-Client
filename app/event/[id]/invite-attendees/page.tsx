"use client";
import { useState } from "react";

const InvitePage = () => {
  const [recipient, setRecipient] = useState("");
  const [invitedList, setInvitedList] = useState<string[]>([]);

  const handleSendInvite = () => {
    if (!recipient) return;
    setInvitedList((prev) => [...prev, recipient]);
    setRecipient("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Invite Someone to Your Event
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full sm:flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <button
            onClick={handleSendInvite}
            className="bg-[#7C3AED] hover:bg-[#6B21A8] text-white font-semibold px-4 py-2 rounded-md text-sm"
          >
            Send Invite
          </button>
        </div>

        {invitedList.length > 0 && (
          <div className="pt-4">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Invited:</h2>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              {invitedList.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitePage;
