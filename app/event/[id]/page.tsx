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
    <main className="min-h-screen bg-white">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.name}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {event.location} • {event.date} @ {event.time}
        </p>

        <img
          src={event.picture}
          alt={event.name}
          className="w-50 h-80 object-cover rounded-lg shadow-md mb-4"
        />

        <p className="text-sm text-gray-600">
          {event.attendees.length} attendee(s)
        </p>
      </div>
    </main>
  );
};

export default SingleEventPage;
