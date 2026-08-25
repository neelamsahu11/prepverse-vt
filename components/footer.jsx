
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t-2 border-black bg-[#eafafa]">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <h2 className="font-serif text-2xl font-black tracking-[0.12em] text-[#006d77]">
              PrepVerse
            </h2>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#34545a] sm:text-base">
            Learn how to stay prepared, respond safely, and protect yourself
            during emergencies. Explore disaster modules, test your knowledge,
            and build essential safety skills.
          </p>

          <Link
            href="/modules"
            className="mt-6 inline-block rounded-full border-2 border-black bg-amber-400 px-6 py-2.5 font-bold text-black shadow-[3px_4px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_2px_0px_#000]"
          >
            Start Learning →
          </Link>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-4 text-lg font-black text-[#006d77]">
            Explore
          </h3>

          <div className="flex flex-col gap-3 text-sm font-semibold text-[#34545a]">
            <Link
              href="/modules"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Modules
            </Link>

            <Link
              href="/quiz"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Quiz
            </Link>

            <Link
              href="/dashboard"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Dashboard
            </Link>

            <Link
              href="/login"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Safety */}
        <div>
          <h3 className="mb-4 text-lg font-black text-[#006d77]">
            Safety
          </h3>

          <div className="flex flex-col gap-3 text-sm font-semibold text-[#34545a]">
            <Link
              href="/emergency"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Emergency Contacts
            </Link>

            <Link
              href="/modules"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Disaster Modules
            </Link>

            <Link
              href="/quiz"
              className="transition hover:translate-x-1 hover:text-[#006d77]"
            >
              Test Your Knowledge
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-[#737500] bg-[#dff4f5]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:px-8 md:flex-row md:text-left lg:px-10">

          <p className="text-sm font-medium text-[#34545a]">
            © {new Date().getFullYear()} PrepVerse. Learn. Prepare. Stay Safe.
          </p>

          <div className="flex items-center gap-5 text-sm font-semibold text-[#34545a]">
            <Link href="/privacy" className="hover:text-[#006d77]">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-[#006d77]">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-[#006d77]">
              Contact
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

