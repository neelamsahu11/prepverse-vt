"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import module from './modules/disaster_modules.json'
import Link from "next/link";

export default function Home() {
   const router = useRouter();
  return < >
    <div className="min-h-screen bg-[#e8f4ff] text-slate-900">

  <div className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 md:gap-10 lg:flex-row lg:gap-6 lg:px-10 lg:py-16">

  {/* LEFT CONTENT */}
  <div className="w-full px-0 text-center sm:px-4 lg:w-1/2 lg:px-[3vw] lg:text-left">

    <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
      Be Ready.
      <br />

      <span className="text-blue-600">
        Be Safe.
      </span>

      <br />

      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
        Start your prep journey today.
      </span>
    </h2>

    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
  Learn what to do before, during, and after a disaster.
  Explore interactive modules, test your knowledge with quizzes,
  and build the skills you need to stay safe and prepared.
</p>

    {/* BUTTONS */}
    <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

      <button
      onClick={() => router.push("/modules")}
        className="
          w-full
          rounded-full
          border-2
          border-black
          bg-amber-400
          px-6
          py-3
          font-bold
          shadow-[4px_5px_0px_#000]
          transition-all
          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-[2px_3px_0px_#000]

          sm:w-auto
          sm:px-7
        "
      >
        Start preparation
      </button>

      <button
        onClick={() => router.push("/modules")}
        className="
          w-full
          rounded-full
          border-2
          border-black
          bg-white
          px-6
          py-3
          font-bold
          shadow-[4px_5px_0px_#000]
          transition-all
          hover:translate-x-1
          hover:translate-y-1
          hover:shadow-[2px_3px_0px_#000]

          sm:w-auto
          sm:px-7
        "
      >
        Explore module
      </button>

    </div>

  </div>


  {/* RIGHT IMAGE */}
  <div className="relative h-[280px] w-full sm:h-[350px] md:h-[400px] lg:h-[500px] lg:w-1/2">

    <Image
      fill
      src="/images/toon.jpeg"
      alt="Disaster preparedness illustration"
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-contain"
      priority
    />

  </div>

</div>


  {/* Modules */}
 <div className="border-y-2 border-black bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">

  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADING */}
    <h3 className="text-3xl font-black sm:text-4xl">
      Modules
    </h3>

    <p className="mt-2 mb-8 max-w-2xl text-sm text-slate-500 sm:text-base">
      Learn, explore and prepare yourself for emergencies.
    </p>

    {/* MODULE GRID */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

      {module.map((data) => {
        return (
          <div
            key={data.id}
            className="
              flex flex-col
              items-center
              gap-5
              rounded-2xl
              border-2
              border-[#6B6F0A]
              bg-white
              p-5
              text-center
              shadow-[4px_5px_0px_#555900]
              transition-all
              duration-300
              hover:-translate-y-1

              sm:flex-row
              sm:text-left
            "
          >

            {/* IMAGE */}
            <div
              className="
                flex
                h-24
                w-24
                shrink-0
                items-center
                justify-center
                rounded-full

                sm:h-28
                sm:w-28
              "
              style={{ backgroundColor: data.color }}
            >
              <img
                src={data.image}
                alt={data.title}
                className="
                  h-14
                  w-14
                  object-contain

                  sm:h-16
                  sm:w-16
                "
              />
            </div>

            {/* CONTENT */}
            <div className="min-w-0 flex-1">

              <h2 className="text-xl font-semibold sm:text-2xl">
                {data.title}
              </h2>

              <p className="mt-1 mb-3 text-sm leading-relaxed text-gray-700">
                {data.description}
              </p>

              <Link
                href={`/modules/${data.id}`}
                style={{ backgroundColor: data.buttonbg }}
                className=" block w-full rounded-3xl px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:opacity-90 sm:w-40 ">
                Start Learning
              </Link>

            </div>

          </div>
        );
      })}

    </div>

  </div>
</div>


  {/* Bottom Section */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-8 py-16 md:grid-cols-3">

    {/* Quick Dial */}
    <div className="rounded-3xl border-2 border-black bg-red-50 p-7 shadow-[5px_6px_0px_#000]">
      <p className="text-2xl font-black">Quick Dial</p>

      <button className="mt-5 block w-full rounded-2xl border-2 border-black bg-red-500 py-3 text-xl font-black text-white shadow-[3px_4px_0px_#000]">
        112
      </button>

      <button className="mt-4 block w-full rounded-2xl border-2 border-black bg-white py-3 font-bold shadow-[3px_4px_0px_#000]">
        Police
      </button>

      <button className="mt-4 block w-full rounded-2xl border-2 border-black bg-white py-3 font-bold shadow-[3px_4px_0px_#000]">
        Fire Station
      </button>
    </div>


    {/* Quiz */}
    <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-blue-500 p-8 text-white shadow-[5px_6px_0px_#000] md:col-span-2">

      <p className="text-2xl font-black">Quiz</p>

      <p className="mt-2 max-w-md text-blue-100">
        Test your disaster-management knowledge and see how prepared you are.
      </p>

      <button className="mt-6 rounded-full border-2 border-black bg-amber-400 px-8 py-3 font-black text-black shadow-[4px_5px_0px_#000] transition hover:translate-x-1 hover:translate-y-1" onClick={()=>router.push("/quiz")} >
        Play Now →
      </button>

    </div>

  </div>

</div>
    
  </>
}
