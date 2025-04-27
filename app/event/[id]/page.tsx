"use client";
import { Event } from "@/types";
import { useEffect, useState } from "react";
import testData from "@/utils/fakeJsonDate.json";

type Response = "yes" | "no";

const SingleEventPage = () => {
  const [event, setEvent] = useState<Event | undefined>(undefined);
  const [response, setResponse] = useState<Response | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const found = testData.events.find((e) => e.id === 1);
    setEvent(found);
  }, []);

  const handleEventRepsonse = async() => {
    //FIXME - Add API call for responding to event.
  }

  if (!event) return <div className="p-6">Loading event...</div>;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 pt-8 pb-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{event.name}</h1>
          <p className="text-sm text-gray-500">
            {event.location} • {event.date} @ {event.time}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-8">

          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={event.picture}
              alt={event.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow"
            />
          </div>

          <div className="flex flex-col justify-between w-full md:w-1/2 bg-gray-100 rounded-lg p-6">
            <div className="space-y-2">
              <p className="text-md text-gray-700">
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className="text-md text-gray-700">
                <span className="font-semibold">Location:</span> {event.location}
              </p>
              <p className="text-md text-gray-700">
                <span className="font-semibold">Time:</span> {event.time}
              </p>
            </div>
            
            <div className="relative inline-flex">
              <button className="bg-white rounded-l-lg px-4 py-2 text-sm border border-gray-300">
                {response ? (response === "yes" ? "Response: Yes" : "Response: No") : "Respond?"}
              </button>

              <button
                className="bg-white rounded-r-lg px-3 py-2 text-sm border-t border-b border-r border-gray-300 flex items-center justify-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1 rounded-lg shadow z-10">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => {
                      setResponse("yes");
                      setDropdownOpen(false);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => {
                      setResponse("no");
                      setDropdownOpen(false);
                    }}
                  >
                    No
                  </button>
                </div>
              )}
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 italic">
                {event.attendees.length} attendee{event.attendees.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleEventPage;
