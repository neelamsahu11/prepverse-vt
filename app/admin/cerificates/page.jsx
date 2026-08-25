"use client";

import { useState } from "react";

export default function CertificatesPage() {
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "Neelam Sahu",
      email: "neelam@gmail.com",
      progress: 100,
      certificate: false,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      progress: 85,
      certificate: false,
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@gmail.com",
      progress: 100,
      certificate: true,
    },
    {
      id: 4,
      name: "Aman Patel",
      email: "aman@gmail.com",
      progress: 70,
      certificate: false,
    },
  ]);

  const giveCertificate = (id) => {
    setParticipants((prev) =>
      prev.map((participant) =>
        participant.id === id
          ? { ...participant, certificate: true }
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
            Certificate Allotment
          </h1>

          <p className="mt-2 text-[#34545a]">
            Issue certificates to participants who have completed the course.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border-2 border-[#737500] bg-white shadow-[5px_5px_0px_#737500]">

          <table className="w-full min-w-[700px]">

            <thead className="bg-[#c7edf1]">
              <tr>
                <th className="px-5 py-4 text-left">Participant</th>
                <th className="px-5 py-4 text-left">Progress</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="px-5 py-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {participants.map((participant) => (
                <tr
                  key={participant.id}
                  className="border-t border-gray-200"
                >

                  <td className="px-5 py-5">
                    <p className="font-bold text-[#006d77]">
                      {participant.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {participant.email}
                    </p>
                  </td>

                  <td className="px-5 py-5 font-bold">
                    {participant.progress}%
                  </td>

                  <td className="px-5 py-5">
                    {participant.certificate ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                        ✓ Issued
                      </span>
                    ) : (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">
                        Not Issued
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-5">
                    {participant.certificate ? (
                      <button
                        disabled
                        className="rounded-xl bg-gray-200 px-4 py-2 font-bold text-gray-500"
                      >
                        Certificate Issued
                      </button>
                    ) : (
                      <button
                        onClick={() => giveCertificate(participant.id)}
                        disabled={participant.progress < 100}
                        className="rounded-xl bg-[#006d77] px-4 py-2 font-bold text-white shadow-[2px_2px_0px_#737500] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Issue Certificate
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </main>
  );
}