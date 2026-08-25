export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getLoggedInUser } from "@/app/getUser";
import Link from "next/link";

const TOTAL_MODULES = 4;

export default async function Dashboard() {
  const user = await getLoggedInUser();

  // ==========================================
  // NOT LOGGED IN
  // ==========================================

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#e8f4ff]">
        <div className="rounded-3xl border-2 border-black bg-white p-8 text-center shadow-[5px_6px_0px_#000]">
          <h1 className="text-2xl font-black">
            Please login first
          </h1>

          <Link
            href="/login"
            className="mt-5 inline-block rounded-xl border-2 border-black bg-amber-300 px-6 py-3 font-black shadow-[3px_4px_0px_#000]"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  // ==========================================
  // DYNAMIC USER DATA
  // ==========================================

  const completedModules = Number(
    user.modules_completed ?? 0
  );

  const quizScore = Number(
    user.quiz_score ?? 0
  );

  const badges = user.badges ?? [];
  const certificates = user.certificates ?? [];

  const badgesCount = badges.length;
  const certificatesCount = certificates.length;

  // ==========================================
  // MODULE PROGRESS
  // ==========================================

  const moduleProgress =
    TOTAL_MODULES > 0
      ? Math.min(
          (completedModules / TOTAL_MODULES) * 100,
          100
        )
      : 0;

return (
  <main className="min-h-screen bg-[#eef7ff] text-slate-900">
    <div className="mx-auto flex min-h-screen max-w-[1500px] gap-6 p-4 lg:p-6">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
     <aside className="hidden w-60 shrink-0 overflow-hidden rounded-[24px] border-2 border-[#737500] bg-[#eefafa] shadow-[5px_6px_0px_#737500] lg:flex lg:flex-col">

  {/* BRAND */}
  <div className="border-b-2 border-[#737500] px-5 py-7">
    <div className="flex items-center gap-3">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c7edf1] text-xl">
        🛡️
      </div>

      <div>
        <p className="font-serif text-[15px] font-bold tracking-wide text-[#006d77]">
          DISASTER
        </p>

        <p className="font-serif text-[15px] font-bold tracking-wide text-[#006d77]">
          PREPARE
        </p>
      </div>

    </div>
  </div>

  {/* NAVIGATION */}
  <nav className="flex-1 px-4 py-6">

    <p className="mb-4 px-2 font-serif text-xs font-bold text-[#738084]">
      Explore
    </p>

    {/* Dashboard */}
    <Link
      href="/dashboard"
      className="mb-3 flex items-center gap-3 rounded-xl border-2 border-[#737500] bg-[#d8f1f2] px-4 py-3 font-serif font-bold text-[#006d77] shadow-[2px_3px_0px_#737500] transition hover:bg-[#cdebed]"
    >
      <span className="text-lg">
        🏠
      </span>

      <span>Dashboard</span>
    </Link>

    {/* Modules */}
    <Link
      href="/modules"
      className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] transition hover:bg-white"
    >
      <span className="text-lg">
        📚
      </span>

      <span>Modules</span>
    </Link>

    {/* Quiz */}
    <Link
      href="/quiz"
      className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] transition hover:bg-white"
    >
      <span className="text-lg">
        📝
      </span>

      <span>Quiz</span>
    </Link>

    {/* Emergency */}
    <Link
      href="/emergency"
      className="mt-6 flex items-center gap-3 rounded-xl border-2 border-[#b9a19d] bg-[#f8dfe0] px-4 py-3 font-serif font-bold text-[#9a4843] transition hover:bg-[#f5d4d5]"
    >
      <span className="text-lg">
        🚨
      </span>

      <span>Emergency</span>
    </Link>

  </nav>

  {/* USER */}
  <div className="border-t-2 border-[#737500] bg-[#e6f7f7] p-4">

    <div className="rounded-xl bg-white px-4 py-3">

      <p className="font-serif text-[10px] font-bold uppercase tracking-wider text-[#8a9698]">
        Logged in as
      </p>

      <div className="mt-2 flex items-center gap-2">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6d8ed] font-serif font-bold text-[#73577e]">
          {user.name?.charAt(0)?.toUpperCase()}
        </div>

        <p className="truncate font-serif text-sm font-bold text-[#294b51]">
          {user.name}
        </p>

      </div>

    </div>

  </div>

</aside>
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <section className="min-w-0 flex-1">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="mb-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <p className="text-xs font-black tracking-[0.2em] text-blue-600">
                YOUR PROGRESS
              </p>
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              My Achievements
            </h1>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Track your learning progress, badges and certificates.
            </p>
          </div>

          {/* USER PROFILE */}
          <div className="flex items-center gap-3 rounded-2xl border-2 border-slate-900 bg-white px-4 py-3 shadow-[3px_3px_0px_#111827]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-blue-100 text-xl">
              😊
            </div>

            <div className="min-w-0">
              <p className="truncate font-black">
                {user.name}
              </p>

              <p className="max-w-[220px] truncate text-xs font-bold text-blue-600">
                {user.email}
              </p>
            </div>

          </div>

        </header>

        {/* =====================================================
            STATS
        ===================================================== */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* MODULE PROGRESS */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-[3px_4px_0px_#111827]">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Modules
                </p>

                <p className="mt-2 text-3xl font-black text-blue-600">
                  {completedModules}
                  <span className="ml-1 text-base text-slate-400">
                    / {TOTAL_MODULES}
                  </span>
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
                📚
              </div>
            </div>

            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-500"
                style={{
                  width: `${moduleProgress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs font-bold text-slate-500">
              {Math.round(moduleProgress)}% completed
            </p>

          </div>

        
          {/* BADGES */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-[3px_4px_0px_#111827]">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Badges
                </p>

                <p className="mt-2 text-3xl font-black text-amber-500">
                  {badgesCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg">
                🏆
              </div>
            </div>

            <p className="mt-4 text-xs font-bold text-slate-500">
              {badgesCount === 0
                ? "Start earning badges!"
                : `${badgesCount} achievement${badgesCount > 1 ? "s" : ""} unlocked`}
            </p>

          </div>

          {/* CERTIFICATES */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-[3px_4px_0px_#111827]">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Certificates
                </p>

                <p className="mt-2 text-3xl font-black text-purple-600">
                  {certificatesCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-lg">
                📜
              </div>
            </div>

            <p className="mt-4 text-xs font-bold text-slate-500">
              {certificatesCount === 0
                ? "Keep learning!"
                : "Well done!"}
            </p>

          </div>

        </div>

        {/* =====================================================
            BADGES SECTION
        ===================================================== */}
        <section className="mb-8 rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-[4px_5px_0px_#111827] sm:p-6">

          {/* SECTION HEADER */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
                🏆
              </div>

              <div>
                <h2 className="text-xl font-black sm:text-2xl">
                  Badges Earned
                </h2>

                <p className="text-xs text-slate-500 sm:text-sm">
                  Achievements unlocked through your learning journey.
                </p>
              </div>

            </div>

            <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-black">
              {badgesCount} Earned
            </span>

          </div>

          {/* BADGES */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {badges.map((badge) => (

              <div
                key={badge.id}
                className="group rounded-2xl border-2 border-slate-200 bg-[#f9fcff] p-5 text-center transition duration-200 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[3px_4px_0px_#111827]"
              >

                {/* ICON */}
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-900 text-4xl ${
                    badge.color ?? "bg-yellow-200"
                  }`}
                >
                  {badge.icon ?? "🏆"}
                </div>

                {/* NAME */}
                <h3 className="mt-4 min-h-[48px] text-base font-black leading-tight">
                  {badge.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 min-h-[50px] text-xs leading-5 text-slate-500">
                  {badge.description ?? "Achievement unlocked!"}
                </p>

                {/* STATUS */}
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                  <span>✓</span>
                  Earned
                </div>

              </div>

            ))}

            {/* EMPTY */}
            {badges.length === 0 && (

              <div className="col-span-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">

                <div className="text-5xl">
                  🏆
                </div>

                <h3 className="mt-4 font-black">
                  No badges yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  Complete a module quiz with a score of 4/5 or 5/5 to unlock your first badge.
                </p>

                <Link
                  href="/quiz"
                  className="mt-5 inline-block rounded-xl bg-amber-300 px-5 py-2.5 text-sm font-black shadow-[2px_3px_0px_#111827] transition hover:translate-y-0.5 hover:shadow-none"
                >
                  Take a Quiz →
                </Link>

              </div>

            )}

          </div>

        </section>

        {/* =====================================================
            CERTIFICATES SECTION
        ===================================================== */}
        <section className="rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-[4px_5px_0px_#111827] sm:p-6">

          {/* HEADER */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl">
                📜
              </div>

              <div>
                <h2 className="text-xl font-black sm:text-2xl">
                  Certificates Earned
                </h2>

                <p className="text-xs text-slate-500 sm:text-sm">
                  Your official disaster preparedness achievements.
                </p>
              </div>

            </div>

            <span className="w-fit rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-700">
              {certificatesCount} Earned
            </span>

          </div>

          {/* CERTIFICATES */}
          <div className="grid gap-5 xl:grid-cols-2">

            {certificates.map((certificate) => (

              <div
                key={certificate.id}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-900 bg-gradient-to-br from-[#fffdf5] to-[#f6f1ff] p-3 shadow-[3px_4px_0px_#111827] transition duration-200 hover:-translate-y-1 hover:shadow-[5px_6px_0px_#111827]"
              >

                <div className="relative overflow-hidden rounded-xl border-2 border-amber-400 px-6 py-7">

                  {/* DECORATION */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[10px] border-purple-100" />

                  <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full border-[10px] border-blue-100" />

                  {/* CONTENT */}
                  <div className="relative text-center">

                    <div className="text-3xl">
                      🏆
                    </div>

                    <p className="mt-2 text-[10px] font-black tracking-[0.25em] text-slate-400">
                      DISASTER PREPARE
                    </p>

                    <h3 className="mt-1 text-xl font-black tracking-wide">
                      CERTIFICATE
                    </h3>

                    <p className="text-[10px] font-black tracking-[0.2em] text-purple-600">
                      OF ACHIEVEMENT
                    </p>

                    {/* DIVIDER */}
                    <div className="mx-auto my-5 h-px w-32 bg-amber-300" />

                    {/* USER */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Proudly presented to
                    </p>

                    <h4 className="mt-2 break-words text-2xl font-black text-purple-700 sm:text-3xl">
                      {user.name}
                    </h4>

                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-amber-400" />

                    {/* CERTIFICATE NAME */}
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      For successfully completing
                    </p>

                    <h5 className="mt-2 text-lg font-black">
                      {certificate.name}
                    </h5>

                    <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-slate-500">
                      {certificate.description ??
                        "Successfully completed the disaster preparedness module."}
                    </p>

                    {/* BOTTOM */}
                    <div className="mt-6 flex items-end justify-between">

                      <div className="text-left">
                        <div className="mb-1 h-px w-20 bg-slate-400" />

                        <p className="text-[9px] font-black">
                          DATE EARNED
                        </p>

                        <p className="mt-1 text-[10px] font-bold text-slate-500">
                          {certificate.earned_at
                            ? new Date(
                                certificate.earned_at
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "Recently earned"}
                        </p>
                      </div>

                      {/* VERIFIED SEAL */}
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 bg-amber-100">

                        <div className="absolute inset-1 rounded-full border border-dashed border-amber-500" />

                        <div className="relative text-center">
                          <div className="text-lg">
                            🏅
                          </div>

                          <p className="text-[6px] font-black tracking-wider">
                            VERIFIED
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* CORNERS */}
                  <div className="absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-purple-400" />
                  <div className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-purple-400" />
                  <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-purple-400" />
                  <div className="absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-purple-400" />

                </div>

              </div>

            ))}

            {/* EMPTY CERTIFICATE STATE */}
            {certificates.length === 0 && (

              <div className="col-span-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">

                <div className="text-5xl">
                  📜
                </div>

                <h3 className="mt-4 font-black">
                  No certificates yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  Score 4/5 or 5/5 in a module quiz to unlock your certificate.
                </p>

                <Link
                  href="/quiz"
                  className="mt-5 inline-block rounded-xl bg-amber-300 px-5 py-2.5 text-sm font-black shadow-[2px_3px_0px_#111827] transition hover:translate-y-0.5 hover:shadow-none"
                >
                  Take a Quiz →
                </Link>

              </div>

            )}

          </div>

        </section>

        {/* =====================================================
            NEXT STEP
        ===================================================== */}
        <section className="mt-6 overflow-hidden rounded-3xl border-2 border-slate-900 bg-blue-600 p-6 text-white shadow-[4px_5px_0px_#111827] sm:p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-black tracking-widest text-amber-300">
                KEEP GOING 🚀
              </p>

              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                Ready for your next achievement?
              </h2>

              <p className="mt-2 text-sm text-blue-100">
                Complete another module and unlock a new badge.
              </p>
            </div>

            <Link
              href="/quiz"
              className="w-fit rounded-xl border-2 border-slate-900 bg-amber-300 px-6 py-3 font-black text-slate-900 shadow-[3px_4px_0px_#111827] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Take a Quiz →
            </Link>

          </div>

        </section>

      </section>
    </div>
  </main>
);
}