"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import module from './modules/disaster_modules.json'
import Link from "next/link";

export default function Home() {
   const router = useRouter();
  return < >
    <div className="min-h-screen bg-[#e8f4ff] text-slate-900">

  {/* Hero */}
  <div className="mx-auto flex min-h-[65vh] max-w-7xl items-center px-8 py-12">

    <div className="w-1/2 px-[4vw]">
      <h2 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
        Be Ready.
        <br />
        <span className="text-blue-600">Be Safe.</span>
        <br />
        Start your prep journey today.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Recusandae consequatur ad vero perspiciatis eius blanditiis.
      </p>

      <div className="mt-7 flex gap-4">
        <button className="rounded-full border-2 border-black bg-amber-400 px-7 py-3 font-bold shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]">
          Start preparation
        </button>

        <button className="rounded-full border-2 border-black bg-white px-7 py-3 font-bold shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]" onClick={()=>router.push("/modules")}>
          Explore module
        </button>
      </div>
    </div>

    <div className="relative h-[500px] w-1/2">
      <Image
        fill
        src="/imges/toon.jpg"
        alt="something"
        sizes="50vw"
        className="object-contain"
      />
    </div>
  </div>


  {/* Modules */}
  <div className="border-y-2 border-black bg-white px-10 py-16">

    <div className="mx-auto max-w-7xl">
      <h3 className="text-4xl font-black">Modules</h3>

      <p className="mt-2 mb-8 text-slate-500">
        Learn, explore and prepare yourself for emergencies.
      </p>
      <div className=" flex gap-5">
      {module.map((data) => {
                    return (
                        <div key={data.id}
                            className="bg-white border-2 border-[#6B6F0A] rounded-2xl shadow-[4px_5px_0px_#555900] p-5 flex items-center gap-5 hover:-translate-y-1 transition-all duration-300">
                            <div
                                className="w-24 h-24 rounded-full flex items-center justify-center shrink-0"
                                style={{ backgroundColor: data.color }}>
                                <img
                                    src={data.image} alt={data.title} className="w-16 h-16 object-contain" />
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold mt-0.5'>{data.title}</h2>
                                <p className='text-sm leading-tight text-gray-700 mb-3'>{data.description}</p>
                                <Link
                                    href={`/modules/${data.id}`}
                                    style={{ backgroundColor: data.buttonbg }}
                                    className="block w-40 mt-5 text-white text-center py-2.5 rounded-3xl hover:bg-gray-800 transition">
                                    Start Learning
                                </Link>
                            </div>
                        </div>
                    )
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
    <footer>

    </footer>
  </>
}
