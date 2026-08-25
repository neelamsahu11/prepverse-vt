import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f5ffff] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 font-serif text-4xl font-bold text-[#006d77]">
          Admin Dashboard
        </h1>

        <p className="mb-8 text-[#34545a]">
          Manage participants, certificates and badges.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Participants */}
          <Link href="/admin/participants">
            <div className="rounded-2xl border-2 border-[#737500] bg-white p-6 shadow-[5px_5px_0px_#737500] transition hover:-translate-y-1">
              <div className="mb-4 text-4xl">👥</div>

              <h2 className="font-serif text-2xl font-bold text-[#006d77]">
                Participants
              </h2>

              <p className="mt-2 text-[#34545a]">
                View and manage registered participants.
              </p>
            </div>
          </Link>

          {/* Certificates */}
          <Link href="/admin/certificates">
            <div className="rounded-2xl border-2 border-[#737500] bg-white p-6 shadow-[5px_5px_0px_#737500] transition hover:-translate-y-1">
              <div className="mb-4 text-4xl">🏆</div>

              <h2 className="font-serif text-2xl font-bold text-[#006d77]">
                Certificates
              </h2>

              <p className="mt-2 text-[#34545a]">
                Allot and manage participant certificates.
              </p>
            </div>
          </Link>

          {/* Badges */}
          <Link href="/admin/badges">
            <div className="rounded-2xl border-2 border-[#737500] bg-white p-6 shadow-[5px_5px_0px_#737500] transition hover:-translate-y-1">
              <div className="mb-4 text-4xl">🎖️</div>

              <h2 className="font-serif text-2xl font-bold text-[#006d77]">
                Badges
              </h2>

              <p className="mt-2 text-[#34545a]">
                Assign badges to participants.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}