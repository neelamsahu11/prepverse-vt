"use client";
import React from 'react'
import module from './quizModule.json' // adjust path to where disaster_modules.json actually lives
import Link from 'next/link'

const ModulesCard = () => {
    return (
        <div className=' bg-gradient-to-br from-[#E0F7FA] via-white to-[#F0FDF4] max-w-6xl mx-auto px-6'>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-8 md:py-10">

                <div className="flex flex-col text-center md:text-left max-w-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006B7A] mb-2">
                        Disaster Readiness Quiz
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed">
                        Empower yourself with life-saving skills through our
                        interactive learning modules.
                    </p>
                </div>

                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0 bg-white flex items-center justify-center">
                    <img
                        src="/images/cat.png"
                        className="w-full h-full object-contain rounded-xl drop-shadow-md"
                        alt="PrepVerse cat"
                    />
                </div>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 h-[450px]'>
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
                                    href={`/quiz/${data.id}`}
                                    style={{ backgroundColor: data.buttonbg }}
                                    className="block w-40 mt-5 text-white text-center py-2.5 rounded-3xl hover:bg-gray-800 transition">
                                    Start Quiz
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ModulesCard
//#FB9E09-orange shade
//#D13704- red Shade
//#00B4D4-cyan shade
//#CADE59-green shade
//#D85E00-dark orange