const participants = [
  {
    id: 1,
    name: "Neelam Sahu",
    email: "neelam@example.com",
    progress: "85%",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    progress: "100%",
  },
  {
    id: 3,
    name: "Priya Verma",
    email: "priya@example.com",
    progress: "70%",
  },
];

export default function ParticipantsPage() {
  return (
    <main className="min-h-screen bg-[#f5ffff] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 font-serif text-3xl font-bold text-[#006d77]">
          Participants
        </h1>

        <div className="overflow-hidden rounded-2xl border-2 border-[#737500] bg-white shadow-[4px_4px_0px_#737500]">

          <table className="w-full">
            <thead className="bg-[#c7edf1]">
              <tr>
                <th className="px-5 py-4 text-left">Name</th>
                <th className="px-5 py-4 text-left">Email</th>
                <th className="px-5 py-4 text-left">Progress</th>
              </tr>
            </thead>

            <tbody>
              {participants.map((participant) => (
                <tr
                  key={participant.id}
                  className="border-t border-gray-200"
                >
                  <td className="px-5 py-4 font-semibold">
                    {participant.name}
                  </td>

                  <td className="px-5 py-4">
                    {participant.email}
                  </td>

                  <td className="px-5 py-4">
                    {participant.progress}
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