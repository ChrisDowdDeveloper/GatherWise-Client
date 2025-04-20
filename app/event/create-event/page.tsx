"use client"
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const CreateEventPage = () => {
    const router = useRouter();
    const [eventName, setEventName] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const handleCreateEvent = async () => {
        try {
        /*FIXME - Create API call for create event
          const newEvent = await createEvent({
            name: eventName,
            location: eventLocation,
            description: eventDescription,
          });
        */
        //  router.push(`/events/${newEvent.id}/invite-attendees`);
        } catch (err) {
          console.error("Error creating event:", err);
        }
      };

      return (
        <div className="w-full px-6 md:px-16 pt-10 pb-10 flex flex-col gap-8 items-center">
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-start justify-center">
            <div
                onClick={handleBoxClick}
                className="relative w-full md:w-[360px] h-72 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 overflow-hidden p-0 m-0"
            >

                {preview ? (
                    <img
                    src={preview}
                    alt="Preview"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />                  
                ) : (
                    <div className="flex items-center justify-center w-full h-full">
                    <span className="text-base font-medium text-center px-4">
                        Click to upload an event image
                    </span>
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                />
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
              <div className="w-[220px]">
                <label htmlFor="eventName" className="block text-sm text-gray-600 mb-1">
                  Name of Event
                </label>
                <input
                  id="eventName"
                  type="text"
                  name="eventName"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="h-9 border border-gray-300 rounded-md px-3 text-sm w-full"
                />
              </div>
      
              <div className="w-[220px]">
                <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  className="h-9 border border-gray-300 rounded-md px-3 text-sm w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <label htmlFor="details" className="block text-sm text-gray-600 mb-1">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none"
              placeholder="Add event details..."
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                className="px-5 py-2 rounded-md text-sm bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                onClick={() => router.replace("/")}
              >
                Cancel
              </button>
      
              <button
                type="button"
                className="px-5 py-2 rounded-md text-sm bg-[#7C3AED] text-white hover:bg-[#6B21A8] transition"
                onClick={handleCreateEvent}
              >
                Next
              </button>
            </div>
          </div>
        </div>
    );
};

export default CreateEventPage;
