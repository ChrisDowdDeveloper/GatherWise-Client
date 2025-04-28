"use client"
import CreateEvent from "@/components/CreateEvent";
import { createEvent } from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const CreateEventPage = () => {
    const [eventName, setEventName] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isPublic, setIsPublic] = useState(true);
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
    
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setSelectedFile(file);
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const handleCreateEvent = async () => {
      try {
        if (!selectedFile) {
          console.error("No image selected.");
          return;
        }
    
        const newEvent = await createEvent({
          name: eventName,
          location: eventLocation,
          description: eventDescription,
          isPublic: isPublic,
          createdAt: new Date().toISOString(),
          file: selectedFile,
        });
    
        router.push(`/events/${newEvent.id}/invite-attendees`);
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
            isPublic={isPublic}
            setIsPublic={setIsPublic}
          />
        </div>
    );
};

export default CreateEventPage;
