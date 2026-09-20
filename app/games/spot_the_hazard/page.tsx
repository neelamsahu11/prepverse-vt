// "use client";

// import { useEffect, useState } from "react";

// const hazards = [
//   {
//     id: 1,
//     name: "Blocked Exit",
//     icon: "🚪",
//     x: "18%",
//     y: "25%",
//   },
//   {
//     id: 2,
//     name: "Damaged Wire",
//     icon: "⚡",
//     x: "70%",
//     y: "22%",
//   },
//   {
//     id: 3,
//     name: "Water Spill",
//     icon: "💧",
//     x: "43%",
//     y: "65%",
//   },
//   {
//     id: 4,
//     name: "Unstable Shelf",
//     icon: "📦",
//     x: "78%",
//     y: "62%",
//   },
//   {
//     id: 5,
//     name: "Open Flame",
//     icon: "🔥",
//     x: "28%",
//     y: "68%",
//   },
// ];

// const GAME_TIME = 30;

// export default function SpotTheHazard() {
//   const [found, setFound] = useState([]);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(GAME_TIME);
//   const [gameOver, setGameOver] = useState(false);
//   const [result, setResult] = useState(null);

//   /* Timer */
//   useEffect(() => {
//     if (gameOver) return;

//     if (time <= 0) {
//       finishGame();
//       return;
//     }

//     const timer = setInterval(() => {
//       setTime((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [time, gameOver]);

//   /* Find hazard */
//   const handleHazardClick = (hazard) => {
//     if (gameOver) return;

//     if (found.includes(hazard.id)) return;

//     const newFound = [...found, hazard.id];

//     setFound(newFound);
//     setScore((prev) => prev + 20);

//     if (newFound.length === hazards.length) {
//       finishGame(newFound);
//     }
//   };

//   /* Finish */
//   const finishGame = (foundList = found) => {
//     setGameOver(true);

//     setResult({
//       score: score,
//       found: foundList.length,
//       total: hazards.length,
//     });
//   };

//   /* Retry */
//   const retryGame = () => {
//     setFound([]);
//     setScore(0);
//     setTime(GAME_TIME);
//     setGameOver(false);
//     setResult(null);
//   };

//   /* Result screen */
//   if (result) {
//     return (
//       <main className="min-h-screen bg-[#e8f4ff] flex items-center justify-center px-6 py-12">

//         <div className="w-full max-w-2xl rounded-3xl border-2 border-black bg-white p-10 text-center shadow-[6px_7px_0px_#000]">

//           <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-5xl shadow-[3px_4px_0px_#000]">
//             {result.found === result.total ? "🏆" : "🔎"}
//           </div>

//           <p className="text-sm font-black tracking-widest text-blue-600">
//             GAME COMPLETED
//           </p>

//           <h1 className="mt-2 text-4xl font-black">
//             Spot the Hazard
//           </h1>

//           <p className="mt-6 text-6xl font-black text-blue-600">
//             {result.score}
//             <span className="text-3xl text-slate-400">
//               {" "}XP
//             </span>
//           </p>

//           <div className="mx-auto mt-8 max-w-sm rounded-2xl border-2 border-black bg-blue-50 p-5">

//             <p className="text-xl font-black">
//               {result.found} / {result.total}
//             </p>

//             <p className="mt-1 text-sm text-slate-600">
//               hazards discovered
//             </p>

//           </div>

//           <button
//             onClick={retryGame}
//             className="mt-8 rounded-full border-2 border-black bg-amber-400 px-10 py-3 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
//           >
//             Play Again ↻
//           </button>

//         </div>

//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#e8f4ff] px-6 py-10 text-slate-900">

//       <div className="mx-auto max-w-6xl">

//         {/* Header */}
//         <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

//           <div>
//             <p className="text-sm font-black tracking-widest text-blue-600">
//               MINI GAME
//             </p>

//             <h1 className="text-4xl font-black">
//               Spot the Hazard 🔎
//             </h1>

//             <p className="mt-2 text-slate-600">
//               Look carefully and find all the dangerous things.
//             </p>
//           </div>

//           <div className="rounded-full border-2 border-black bg-amber-300 px-6 py-3 font-black shadow-[3px_4px_0px_#000]">
//             ⭐ {score} XP
//           </div>

//         </div>


//         {/* Stats */}
//         <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

//           <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_4px_0px_#000]">
//             <p className="text-sm font-bold text-slate-500">
//               TIME
//             </p>

//             <p
//               className={`text-2xl font-black ${
//                 time <= 10
//                   ? "text-red-500"
//                   : "text-blue-600"
//               }`}
//             >
//               00:{String(time).padStart(2, "0")}
//             </p>
//           </div>


//           <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_4px_0px_#000]">
//             <p className="text-sm font-bold text-slate-500">
//               SCORE
//             </p>

//             <p className="text-2xl font-black">
//               {score}
//             </p>
//           </div>


//           <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_4px_0px_#000]">
//             <p className="text-sm font-bold text-slate-500">
//               FOUND
//             </p>

//             <p className="text-2xl font-black">
//               {found.length} / {hazards.length}
//             </p>
//           </div>

//         </div>


//         {/* Game Scene */}
//         <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[6px_7px_0px_#000]">

//           <div className="mb-5 flex items-center justify-between">

//             <div>
//               <h2 className="text-2xl font-black">
//                 Emergency Room
//               </h2>

//               <p className="text-sm text-slate-500">
//                 Find all 5 hazards before time runs out.
//               </p>
//             </div>

//             <div className="hidden rounded-full border-2 border-black bg-blue-100 px-4 py-2 text-sm font-black sm:block">
//               🔎 Search carefully
//             </div>

//           </div>


//           {/* Scene */}
//           <div className="relative h-[550px] overflow-hidden rounded-2xl border-2 border-black bg-[#d8ecf7]">

//             {/* Floor */}
//             <div className="absolute bottom-0 left-0 h-[28%] w-full border-t-4 border-black bg-[#c9a87c]" />

//             {/* Window */}
//             <div className="absolute left-[5%] top-[7%] h-[24%] w-[25%] border-4 border-black bg-sky-300">

//               <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-black" />

//               <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 bg-black" />

//               <div className="absolute inset-0 bg-white/20" />

//             </div>


//             {/* Door */}
//             <div className="absolute right-[5%] top-[12%] h-[52%] w-[18%] rounded-t-xl border-4 border-black bg-amber-700">

//               <div className="absolute right-4 top-1/2 h-4 w-4 rounded-full border-2 border-black bg-amber-300" />

//             </div>


//             {/* Table */}
//             <div className="absolute bottom-[18%] left-[34%] h-[12%] w-[32%] rounded-lg border-4 border-black bg-amber-600" />

//             {/* Table legs */}
//             <div className="absolute bottom-[5%] left-[38%] h-[14%] w-5 border-4 border-black bg-amber-700" />

//             <div className="absolute bottom-[5%] right-[38%] h-[14%] w-5 border-4 border-black bg-amber-700" />


//             {/* Shelf */}
//             <div className="absolute right-[26%] top-[20%] h-[30%] w-[16%] border-4 border-black bg-amber-600">

//               <div className="absolute top-1/2 h-2 w-full bg-black" />

//               <div className="absolute left-2 top-3 text-3xl">
//                 📦
//               </div>

//               <div className="absolute bottom-3 right-2 text-3xl">
//                 📦
//               </div>

//             </div>


//             {/* Hazards */}
//             {hazards.map((hazard) => {

//               const isFound = found.includes(hazard.id);

//               return (
//                 <button
//                   key={hazard.id}
//                   onClick={() => handleHazardClick(hazard)}
//                   disabled={isFound || gameOver}
//                   style={{
//                     left: hazard.x,
//                     top: hazard.y,
//                   }}
//                   className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black text-3xl transition-all ${
//                     isFound
//                       ? "cursor-default bg-green-400 opacity-90 shadow-[3px_4px_0px_#000]"
//                       : "cursor-pointer bg-white shadow-[3px_4px_0px_#000] hover:scale-110 hover:bg-red-100"
//                   }`}
//                 >

//                   {isFound ? "✓" : hazard.icon}

//                 </button>
//               );
//             })}

//           </div>


//           {/* Hazard list */}
//           <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">

//             {hazards.map((hazard) => {

//               const isFound = found.includes(hazard.id);

//               return (
//                 <div
//                   key={hazard.id}
//                   className={`rounded-2xl border-2 border-black p-3 text-center font-bold ${
//                     isFound
//                       ? "bg-green-100"
//                       : "bg-slate-50"
//                   }`}
//                 >

//                   <div className="text-2xl">
//                     {isFound ? "✅" : "❓"}
//                   </div>

//                   <p className="mt-1 text-xs">
//                     {isFound ? hazard.name : "Unknown Hazard"}
//                   </p>

//                 </div>
//               );
//             })}

//           </div>

//         </div>


//         {/* Tip */}
//         <div className="mt-8 rounded-3xl border-2 border-black bg-amber-100 p-6 shadow-[4px_5px_0px_#000]">

//           <p className="font-black">
//             💡 Safety Tip
//           </p>

//           <p className="mt-1 text-sm text-slate-700">
//             In an emergency, look for blocked exits, electrical
//             hazards, fire risks, unstable objects and slippery surfaces.
//           </p>

//         </div>

//       </div>

//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";

type Hazard = {
  id: number;
  name: string;
  icon: string;
  x: string;
  y: string;
};

type GameResult = {
  score: number;
  found: number;
  total: number;
};

const hazards: Hazard[] = [
  {
    id: 1,
    name: "Blocked Exit",
    icon: "🚪",
    x: "18%",
    y: "25%",
  },
  {
    id: 2,
    name: "Damaged Wire",
    icon: "⚡",
    x: "70%",
    y: "22%",
  },
  {
    id: 3,
    name: "Water Spill",
    icon: "💧",
    x: "43%",
    y: "65%",
  },
  {
    id: 4,
    name: "Unstable Shelf",
    icon: "📦",
    x: "78%",
    y: "62%",
  },
  {
    id: 5,
    name: "Open Flame",
    icon: "🔥",
    x: "28%",
    y: "68%",
  },
];

const GAME_TIME = 30;

export default function SpotTheHazard() {
  const [found, setFound] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(GAME_TIME);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [result, setResult] = useState<GameResult | null>(null);

  /* Timer */
  useEffect(() => {
    if (gameOver) return;

    if (time <= 0) {
      finishGame();
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, gameOver]);

  /* Find hazard */
  const handleHazardClick = (hazard: Hazard) => {
    if (gameOver) return;

    if (found.includes(hazard.id)) return;

    const newFound = [...found, hazard.id];

    setFound(newFound);
    setScore((prev) => prev + 20);

    if (newFound.length === hazards.length) {
      finishGame(newFound);
    }
  };

  /* Finish */
  const finishGame = (foundList: number[] = found) => {
    setGameOver(true);

    setResult({
      score: score,
      found: foundList.length,
      total: hazards.length,
    });
  };

  /* Retry */
  const retryGame = () => {
    setFound([]);
    setScore(0);
    setTime(GAME_TIME);
    setGameOver(false);
    setResult(null);
  };

  /* Result screen */
  if (result) {
    return (
      <main className="min-h-screen bg-[#e8f4ff] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-3xl border-2 border-black bg-white p-10 text-center shadow-[6px_7px_0px_#000]">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-5xl shadow-[3px_4px_0px_#000]">
            {result.found === result.total ? "🏆" : "🔎"}
          </div>

          <p className="text-sm font-black tracking-widest text-blue-600">
            GAME COMPLETED
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Spot the Hazard
          </h1>

          <p className="mt-6 text-6xl font-black text-blue-600">
            {result.score}
            <span className="text-3xl text-slate-400">
              {" "}XP
            </span>
          </p>

          <div className="mx-auto mt-8 max-w-sm rounded-2xl border-2 border-black bg-blue-50 p-5">
            <p className="text-xl font-black">
              {result.found} / {result.total}
            </p>

            <p className="mt-1 text-sm text-slate-600">
              hazards discovered
            </p>
          </div>

          <button
            onClick={retryGame}
            className="mt-8 rounded-full border-2 border-black bg-amber-400 px-10 py-3 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
          >
            Play Again ↻
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#e8f4ff] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black tracking-widest text-blue-600">
              MINI GAME
            </p>

            <h1 className="text-4xl font-black">
              Spot the Hazard 🔎
            </h1>

            <p className="mt-2 text-slate-600">
              Look carefully and find all the dangerous things.
            </p>
          </div>

          <div className="rounded-full border-2 border-black bg-amber-300 px-6 py-3 font-black shadow-[3px_4px_0px_#000]">
            ⭐ {score} XP
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_4px_0px_#000]">
            <p className="text-sm font-bold text-slate-500">
              TIME
            </p>

            <p
              className={`text-2xl font-black ${
                time <= 10
                  ? "text-red-500"
                  : "text-blue-600"
              }`}
            >
              00:{String(time).padStart(2, "0")}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_4px_0px_#000]">
            <p className="text-sm font-bold text-slate-500">
              SCORE
            </p>

            <p className="text-2xl font-black">
              {score}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[3px_4px_0px_#000]">
            <p className="text-sm font-bold text-slate-500">
              FOUND
            </p>

            <p className="text-2xl font-black">
              {found.length} / {hazards.length}
            </p>
          </div>
        </div>

        {/* Game Scene */}
        <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[6px_7px_0px_#000]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Emergency Room
              </h2>

              <p className="text-sm text-slate-500">
                Find all 5 hazards before time runs out.
              </p>
            </div>

            <div className="hidden rounded-full border-2 border-black bg-blue-100 px-4 py-2 text-sm font-black sm:block">
              🔎 Search carefully
            </div>
          </div>

          {/* Scene */}
          <div className="relative h-[550px] overflow-hidden rounded-2xl border-2 border-black bg-[#d8ecf7]">

            {/* Floor */}
            <div className="absolute bottom-0 left-0 h-[28%] w-full border-t-4 border-black bg-[#c9a87c]" />

            {/* Window */}
            <div className="absolute left-[5%] top-[7%] h-[24%] w-[25%] border-4 border-black bg-sky-300">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-black" />

              <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 bg-black" />

              <div className="absolute inset-0 bg-white/20" />
            </div>

            {/* Door */}
            <div className="absolute right-[5%] top-[12%] h-[52%] w-[18%] rounded-t-xl border-4 border-black bg-amber-700">
              <div className="absolute right-4 top-1/2 h-4 w-4 rounded-full border-2 border-black bg-amber-300" />
            </div>

            {/* Table */}
            <div className="absolute bottom-[18%] left-[34%] h-[12%] w-[32%] rounded-lg border-4 border-black bg-amber-600" />

            {/* Table legs */}
            <div className="absolute bottom-[5%] left-[38%] h-[14%] w-5 border-4 border-black bg-amber-700" />

            <div className="absolute bottom-[5%] right-[38%] h-[14%] w-5 border-4 border-black bg-amber-700" />

            {/* Shelf */}
            <div className="absolute right-[26%] top-[20%] h-[30%] w-[16%] border-4 border-black bg-amber-600">
              <div className="absolute top-1/2 h-2 w-full bg-black" />

              <div className="absolute left-2 top-3 text-3xl">
                📦
              </div>

              <div className="absolute bottom-3 right-2 text-3xl">
                📦
              </div>
            </div>

            {/* Hazards */}
            {hazards.map((hazard) => {
              const isFound = found.includes(hazard.id);

              return (
                <button
                  key={hazard.id}
                  onClick={() => handleHazardClick(hazard)}
                  disabled={isFound || gameOver}
                  style={{
                    left: hazard.x,
                    top: hazard.y,
                  }}
                  className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black text-3xl transition-all ${
                    isFound
                      ? "cursor-default bg-green-400 opacity-90 shadow-[3px_4px_0px_#000]"
                      : "cursor-pointer bg-white shadow-[3px_4px_0px_#000] hover:scale-110 hover:bg-red-100"
                  }`}
                >
                  {isFound ? "✓" : hazard.icon}
                </button>
              );
            })}
          </div>

          {/* Hazard list */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {hazards.map((hazard) => {
              const isFound = found.includes(hazard.id);

              return (
                <div
                  key={hazard.id}
                  className={`rounded-2xl border-2 border-black p-3 text-center font-bold ${
                    isFound
                      ? "bg-green-100"
                      : "bg-slate-50"
                  }`}
                >
                  <div className="text-2xl">
                    {isFound ? "✅" : "❓"}
                  </div>

                  <p className="mt-1 text-xs">
                    {isFound ? hazard.name : "Unknown Hazard"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tip */}
        <div className="mt-8 rounded-3xl border-2 border-black bg-amber-100 p-6 shadow-[4px_5px_0px_#000]">
          <p className="font-black">
            💡 Safety Tip
          </p>

          <p className="mt-1 text-sm text-slate-700">
            In an emergency, look for blocked exits, electrical
            hazards, fire risks, unstable objects and slippery surfaces.
          </p>
        </div>

      </div>
    </main>
  );
}