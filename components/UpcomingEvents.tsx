"use client"
import React, { useEffect, useState } from 'react'
import InvitationCard from './InvitationCard';
import { useRouter } from 'next/navigation';
import testData from "../utils/fakeJsonDate.json";
import { Event } from '@/types';

const UpcomingEvents = () => {
  const [invitations, setInvitations] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    setInvitations(testData.events);
  }, []);

  const handleCardClick = (event: Event) => {
    router.push(`/event/${event.id}`)
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center p-6">
      {invitations.map((event) => (
        <InvitationCard key={event.id} event={event} onClick={() => handleCardClick(event)}/>
      ))}
    </div>
  );
}

export default UpcomingEvents