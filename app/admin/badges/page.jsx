"use client";

import { useState } from "react";

export default function BadgesPage() {
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "Neelam Sahu",
      email: "neelam@gmail.com",
      badge: "",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      badge: "",
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@gmail.com",
      badge: "Safety Expert",
    },
    {
      id: 4,
      name: "Aman Patel",
      email: "aman@gmail.com",
      badge: "",
    },
  ]);

  const giveBadge = (id) => {
    setParticipants((prev) =>
      prev.map((participant) =>
        participant.id === id
          ? { ...participant, badge: "Safety Champion" }
          : participant
      )
    );
  };

  return (
    <main className="min-h-screen bg-[#f5ffff] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="font-serif font-bold tracking-widest text-[#737500]">
            PREPVERSE ADMIN
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#006d77]">
            Badge Allotment
          </h1>

          <p className="mt-2 text-[#34545a]">
            Assign achievement badges to participants.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {participants.map((participant) => (
            <div
              key={participant.id}
              className="rounded-2xl border-2 border-[#737500] bg-white p-6 shadow-[5px_5px_0px_#737500]"
            >

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c7edf1] text-3xl">
                🎖️
              </div>

              <h2 className="font-serif text-xl font-bold text-[#006d77]">
                {participant.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {participant.email}
              </p>

              <div className="my-5 border-t border-gray-200" />

              {participant.badge ? (
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    CURRENT BADGE
                  </p>

                  <p className="mt-2 rounded-xl bg-[#fff4c2] px-4 py-3 font-bold text-[#737500]">
                    🏅 {participant.badge}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => giveBadge(participant.id)}
                  className="w-full rounded-xl border-2 border-[#737500] bg-[#c7edf1] px-4 py-3 font-bold text-[#006d77] shadow-[2px_2px_0px_#737500] hover:translate-y-[1px]"
                >
                  🎖️ Assign Badge
                </button>
              )}

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}