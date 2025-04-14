import { Event } from "@/types";
import Image from "next/image";

type Props = {
  event: Event;
  onClick?: () => void;
};

const InvitationCard = ({ event, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-72 border border-gray-200 rounded-xl shadow hover:shadow-md transition p-3 bg-white"
    >
      <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
        <Image
          src={event.picture}
          alt={event.name}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-base font-semibold text-gray-800 truncate">{event.name}</h2>
      <p className="text-xs text-gray-500">
        {event.location} • {event.date} @ {event.time}
      </p>
      <p className="text-xs text-gray-600 mt-1">
        {event.attendees.length} attending
      </p>
    </div>
  );
};

export default InvitationCard;
