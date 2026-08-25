import Link from "next/link";

function Navigation() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-[2147483647]
        isolate
        bg-[#eafafa]
      "
    >
      <div className="h-[72px] w-full border-b-2 border-[#737500] bg-[#eafafa] shadow-[0_3px_0px_#737500]">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <p className="font-serif text-[12px] font-bold tracking-[0.15em] text-[#006d77] sm:text-sm">
              PrepVerse
            </p>
          </Link>

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
              href="/dashboard"
              className="rounded-full px-5 py-2 font-serif font-bold text-[#34545a] hover:bg-white hover:text-[#006d77]"
            >
              Dashboard
            </Link>
          </nav>

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

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#737500] bg-white text-xl shadow-[2px_2px_0px_#737500] md:hidden"
          >
            ☰
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navigation;