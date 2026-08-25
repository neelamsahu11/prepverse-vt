"use client";

import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#e8f4ff] px-6 py-10">

      <div className="flex min-h-[85vh] items-center justify-center">

        <div className="w-full max-w-2xl rounded-[2.5rem] border-2 border-black bg-white p-10 text-center shadow-[7px_8px_0px_#000] sm:p-16">

          {/* Icon */}
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-6xl shadow-[4px_5px_0px_#000]">
            🚧
          </div>

          {/* Text */}
          <p className="mt-8 text-sm font-black tracking-[0.25em] text-blue-600">
            FEATURE LOCKED
          </p>

          <h1 className="mt-2 text-5xl font-black">
            Coming Soon!
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg text-slate-500">
            We're working on something awesome.
            This feature will be available soon!
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* Go Home */}
            <button
              onClick={() => router.push("/")}
              className="rounded-full border-2 border-black bg-blue-500 px-8 py-3 font-black text-white shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
            >
              🏠 Go Home
            </button>

            {/* Go Back */}
            <button
              onClick={() => router.back()}
              className="rounded-full border-2 border-black bg-amber-400 px-8 py-3 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
            >
              ← Go Back
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}