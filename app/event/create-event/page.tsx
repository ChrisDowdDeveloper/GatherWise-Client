"use client"
import CreateEvent from "@/components/CreateEvent";
import React, { useRef, useState } from "react";

const CreateEventPage = () => {
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
        <div>
          <CreateEvent 
            handleBoxClick={handleBoxClick}
            handleCreateEvent={handleCreateEvent}
            handleImageChange={handleImageChange}
            eventName={eventName}
            setEventName={setEventName}
            eventLocation={eventLocation}
            setEventLocation={setEventLocation}
            eventDescription={eventDescription}
            setEventDescription={setEventDescription}
            preview={preview}
            fileInputRef={fileInputRef}
          />
        </div>
    );
};

export default CreateEventPage;
