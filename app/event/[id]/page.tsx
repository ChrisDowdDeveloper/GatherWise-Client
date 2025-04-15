"use client";
import { Event } from "@/types";
import { useEffect, useState } from "react";
import testData from "@/utils/fakeJsonDate.json";

const SingleEventPage = () => {
  const [event, setEvent] = useState<Event | undefined>(undefined);

  useEffect(() => {
    const found = testData.events.find((e) => e.id === 1);
    setEvent(found);
  }, []);

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
            
            <div className="inline-flex">
              <button className="bg-white rounded-l-lg px-4 py-2 text-sm border border-gray-300">
                Respond?
              </button>
              <button className="bg-white rounded-r-lg px-2 py-1 text-sm border-t border-b border-r border-gray-300">
                v
              </button>
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
