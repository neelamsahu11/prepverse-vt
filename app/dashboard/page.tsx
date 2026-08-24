
import { getLoggedInUser } from "@/app/getUser";
import Link from "next/link";


export default async function Dashboard() {
    const user = await getLoggedInUser();

    if (!user) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <div className="rounded-3xl border-2 border-black bg-white p-8 text-center shadow-[5px_6px_0px_#000]">
                    <h1 className="text-2xl font-black">
                        Please login first
                    </h1>

                    <a
                        href="/login"
                        className="mt-5 inline-block rounded-xl border-2 border-black bg-amber-300 px-6 py-3 font-black shadow-[3px_4px_0px_#000]"
                    >
                        Go to Login
                    </a>
                </div>
            </main>
        );
    }
  return (
    <main className="min-h-screen bg-[#e8f4ff] text-slate-900">

      {/* PAGE */}
      <div className="mx-auto flex min-h-screen max-w-[1600px] p-5">

        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 rounded-3xl border-2 border-black bg-[#d9edff] shadow-[5px_6px_0px_#000] lg:flex lg:flex-col">

          {/* Logo */}
          <div className="border-b-2 border-black p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-amber-300 text-2xl shadow-[2px_3px_0px_#000]">
                🛡️
              </div>

              <div>
                <p className="text-sm font-black leading-tight">
                  DISASTER
                </p>
                <p className="text-sm font-black leading-tight">
                  PREPARE
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-3 p-5">

            <Link
              href="/"
              className="flex items-center gap-4 rounded-2xl px-4 py-3 font-bold transition hover:bg-white"
            >
              <span className="text-xl">🏠</span>
              Dashboard
            </Link>

            <Link
              href="/modules"
              className="flex items-center gap-4 rounded-2xl px-4 py-3 font-bold transition hover:bg-white"
            >
              <span className="text-xl">📚</span>
              Modules
            </Link>

            <Link
              href="/quiz"
              className="flex items-center gap-4 rounded-2xl px-4 py-3 font-bold transition hover:bg-white"
            >
              <span className="text-xl">📝</span>
              Quiz
            </Link>

            {/* Active */}
            <Link
              href="/dashboard"
              className="flex items-center gap-4 rounded-2xl border-2 border-black bg-amber-300 px-4 py-3 font-black shadow-[3px_4px_0px_#000]"
            >
              <span className="text-xl">🏆</span>
              Achievements
            </Link>

            <Link
              href="/quick-dial"
              className="flex items-center gap-4 rounded-2xl px-4 py-3 font-bold transition hover:bg-white"
            >
              <span className="text-xl">📞</span>
              Quick Dial
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-4 rounded-2xl px-4 py-3 font-bold transition hover:bg-white"
            >
              <span className="text-xl">👤</span>
              Profile
            </Link>

          </nav>

          {/* Logout */}
          <div className="p-5">
            <button className="w-full rounded-2xl border-2 border-black bg-red-400 px-4 py-3 font-black shadow-[3px_4px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_2px_0px_#000]">
              🚪 Logout
            </button>
          </div>

        </aside>


        {/* MAIN CONTENT */}
        <section className="w-full px-2 py-2 lg:px-8 lg:py-4">

          {/* HEADER */}
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="mb-1 text-sm font-black tracking-widest text-blue-600">
                YOUR PROGRESS
              </p>

              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                My Achievements
              </h1>

              <p className="mt-2 text-slate-500">
                Badges and certificates you&apos;ve earned.
              </p>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 rounded-2xl border-2 border-black bg-white px-4 py-3 shadow-[3px_4px_0px_#000]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-blue-200 text-2xl">
                😊
              </div>

              <div>
                <p className="font-black">{user.name}</p>
                <p className="text-sm font-bold text-blue-600">
                  
                </p>
              </div>

              <span className="ml-3 text-xl">⌄</span>
            </div>

          </div>


          {/* STATS */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_5px_0px_#000]">
              <p className="text-sm font-bold text-slate-500">
                Modules Completed
              </p>

              <p className="mt-2 text-4xl font-black text-blue-600">
                {user.modules_completed}
              </p>

              <div className="mt-3 h-3 overflow-hidden rounded-full border-2 border-black bg-slate-100">
                <div className=" h-full  bg-blue-500  "
                style={{
                width: `${Math.min(user.modules_completed * 10, 100)}%`
            }}
                />
              </div>
            </div>

            <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_5px_0px_#000]">
              <p className="text-sm font-bold text-slate-500">
                Quiz Score
              </p>

              <p className="mt-2 text-4xl font-black text-green-600">
                {user.quiz_score}%
              </p>

              <p className="mt-2 text-sm font-bold text-slate-500">
                Keep improving!
              </p>
            </div>

            <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_5px_0px_#000]">
              <p className="text-sm font-bold text-slate-500">
                Badges Earned
              </p>

              <p className="mt-2 text-4xl font-black text-amber-500">
                {user.badges_earned}
              </p>

              <p className="mt-2 text-sm font-bold text-slate-500">
                Great progress!
              </p>
            </div>

            <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_5px_0px_#000]">
              <p className="text-sm font-bold text-slate-500">
                Certificates
              </p>

              <p className="mt-2 text-4xl font-black text-purple-600">
                {user.certificates_earned}
              </p>

              <p className="mt-2 text-sm font-bold text-slate-500">
                Keep learning!
              </p>
            </div>

          </div>


          {/* BADGES */}
          <div className="mb-8 rounded-3xl border-2 border-black bg-white p-6 shadow-[5px_6px_0px_#000]">

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-xl shadow-[2px_3px_0px_#000]">
                  ⭐
                </div>

                <div>
                  <h2 className="text-2xl font-black">
                    Badges Earned
                  </h2>

                  <p className="text-sm text-slate-500">
                    Your achievements along the way.
                  </p>
                </div>

              </div>

              <button className="rounded-full border-2 border-black bg-[#e8f4ff] px-5 py-2 font-black shadow-[2px_3px_0px_#000] transition hover:bg-amber-300">
                View All →
              </button>

            </div>


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {user.badges.map((badge) => (
    <div
        key={badge.id}
        className="group rounded-2xl border-2 border-black bg-[#f8fbff] p-5 text-center shadow-[3px_4px_0px_#000] transition-all hover:-translate-y-1"
    >

        <div
            className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-black text-5xl shadow-[3px_4px_0px_#000] ${badge.color}`}
        >
            {badge.icon}
        </div>

        <h3 className="mt-5 text-lg font-black leading-tight">
            {badge.name}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
            {badge.description}
        </p>

        <span className="mt-4 inline-block rounded-full border-2 border-black bg-green-200 px-4 py-1 text-xs font-black">
            Earned
        </span>

    </div>
))}
            </div>

          </div>


          {/* CERTIFICATES */}
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[5px_6px_0px_#000]">

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-blue-200 text-xl shadow-[2px_3px_0px_#000]">
                  📜
                </div>

                <div>
                  <h2 className="text-2xl font-black">
                    Certificates Earned
                  </h2>

                  <p className="text-sm text-slate-500">
                    Certificates you have unlocked.
                  </p>
                </div>

              </div>

              <button className="rounded-full border-2 border-black bg-[#e8f4ff] px-5 py-2 font-black shadow-[2px_3px_0px_#000] transition hover:bg-amber-300">
                View All →
              </button>

            </div>


            <div className="grid gap-6 lg:grid-cols-3">

              {user.certificates.map((certificate) => (
    <div
        key={certificate.id}
        className="relative overflow-hidden rounded-2xl border-2 border-black bg-orange-50 p-6 shadow-[4px_5px_0px_#000]"
    >

        <div className="absolute left-2 top-2 h-6 w-6 border-l-4 border-t-4 border-slate-500" />

        <div className="absolute right-2 top-2 h-6 w-6 border-r-4 border-t-4 border-slate-500" />

        <div className="absolute bottom-2 left-2 h-6 w-6 border-b-4 border-l-4 border-slate-500" />

        <div className="absolute bottom-2 right-2 h-6 w-6 border-b-4 border-r-4 border-slate-500" />

        <div className="text-center">

            <p className="text-xs font-black tracking-widest text-slate-500">
                CERTIFICATE OF ACHIEVEMENT
            </p>

            <div className="mx-auto my-4 h-px w-32 bg-slate-400" />

            <h3 className="text-xl font-black">
                {certificate.name}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-600">
                {certificate.description}
            </p>

            <div className="mt-6 flex items-center justify-between">

                <p className="text-xs font-bold text-slate-500">
                    {new Date(certificate.earned_at).toLocaleDateString(
                        "en-IN",
                        {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        }
                    )}
                </p>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-xl shadow-[2px_3px_0px_#000]">
                    🏅
                </div>

            </div>

        </div>
    </div>
))}
            </div>

          </div>


          {/* NEXT STEP */}
          <div className="mt-8 overflow-hidden rounded-3xl border-2 border-black bg-blue-500 p-7 text-white shadow-[5px_6px_0px_#000]">

            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

              <div>
                <p className="font-black text-amber-300">
                  KEEP GOING 🚀
                </p>

                <h2 className="mt-1 text-3xl font-black">
                  Ready for your next achievement?
                </h2>

                <p className="mt-2 text-blue-100">
                  Complete another module and unlock a new badge.
                </p>
              </div>

              <Link
                href="/quiz"
                className="shrink-0 rounded-full border-2 border-black bg-amber-400 px-7 py-3 font-black text-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
              >
                Take a Quiz →
              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}