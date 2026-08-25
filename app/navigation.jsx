"use client";

import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] bg-[#eafafa]">
      <div className="h-[72px] w-full border-b-2 border-[#737500] bg-[#eafafa] shadow-[0_3px_0px_#737500]">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <p className="font-serif text-[12px] font-bold tracking-[0.15em] text-[#006d77] sm:text-sm">
              PrepVerse
            </p>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/modules"
              className="rounded-full px-5 py-2 font-serif font-bold text-[#34545a] hover:bg-white hover:text-[#006d77]"
            >
              Modules
            </Link>

            <Link
              href="/quiz"
              className="rounded-full px-5 py-2 font-serif font-bold text-[#34545a] hover:bg-white hover:text-[#006d77]"
            >
              Quiz
            </Link>

            <Link
              href="/EmergencyContact"
              className="rounded-full px-5 py-2 font-serif font-bold text-[#34545a] hover:bg-white hover:text-[#006d77]"
            >
              Emergency contact
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full px-5 py-2 font-serif font-bold text-[#34545a] hover:bg-white hover:text-[#006d77]"
            >
              Dashboard
            </Link>
          </nav>

          {/* DESKTOP LOGIN */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/login"
              className="rounded-full px-4 py-2 font-serif font-bold text-[#34545a] hover:bg-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-full border-2 bg-[#c7edf1] px-5 py-2 font-serif font-bold text-[#006d77] shadow-[2px_2px_0px_#737500]"
            >
              Register
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#737500] bg-white text-xl shadow-[2px_2px_0px_#737500] md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-b-2 border-[#737500] bg-[#eafafa] px-4 py-4 shadow-md md:hidden">

          <nav className="flex flex-col gap-2">

            <Link
              href="/modules"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] hover:bg-white"
            >
              Modules
            </Link>

            <Link
              href="/quiz"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] hover:bg-white"
            >
              Quiz
            </Link>

            <Link
              href="/EmergencyContact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] hover:bg-white"
            >
              Emergency contact
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] hover:bg-white"
            >
              Dashboard
            </Link>

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-serif font-bold text-[#34545a] hover:bg-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border-2 bg-[#c7edf1] px-4 py-3 text-center font-serif font-bold text-[#006d77] shadow-[2px_2px_0px_#737500]"
            >
              Register
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navigation;