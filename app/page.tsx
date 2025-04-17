"use client"

import Invitations from "@/components/Invitations";
import Main from "@/components/Main";
import UpcomingEvents from "@/components/UpcomingEvents";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Main />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Invitations</h1>
        <Invitations />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Upcoming Events</h1>
        <UpcomingEvents />
        <div className="w-full bg-purple-200 rounded-lg p-10 md:p-20 text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Not Finding What You're Looking For?
          </h1>

          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            You can start your own event in seconds — choose a location, set a time, and invite people your way. It's that easy. Don’t wait for something to show up. Make it happen.
          </p>

          <button 
            onClick={() => router.push("/event/create-event")}
            className="text-white font-bold bg-[#7C3AED] hover:bg-[#6B21A8] transition px-6 py-3 rounded-lg tracking-wider text-sm uppercase">
            Create Your Own
          </button>
        </div>
      </main>
    </div>
  );
}
