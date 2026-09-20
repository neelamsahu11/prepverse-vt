"use client";

import { useEffect, useState } from "react";

type EmergencyItem = {
  id: number;
  name: string;
  icon: string;
  correct: boolean;
};

const items: EmergencyItem[] = [
  { id: 1, name: "Water", icon: "💧", correct: true },
  { id: 2, name: "Flashlight", icon: "🔦", correct: true },
  { id: 3, name: "First Aid", icon: "🩹", correct: true },
  { id: 4, name: "Batteries", icon: "🔋", correct: true },
  { id: 5, name: "Phone", icon: "📱", correct: true },
  { id: 6, name: "Food", icon: "🍫", correct: true },
  { id: 7, name: "Blanket", icon: "🧥", correct: true },
  { id: 8, name: "Game Console", icon: "🎮", correct: false },
  { id: 9, name: "Teddy Bear", icon: "🧸", correct: false },
  { id: 10, name: "Football", icon: "⚽", correct: false },
];

const MAX_ITEMS = 8;
const GAME_TIME = 30;

export default function EmergencyBag() {
 const [selectedItems, setSelectedItems] = useState<EmergencyItem[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_TIME);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState<{
  score: number;
  correctItems: number;
  wrongItems: number;
  missingItems: number;
} | null>(null);

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

  /* Select item */
  const handleItemClick = (item: EmergencyItem) => {
    if (gameOver) return;

    const alreadySelected = selectedItems.some(
      (selected) => selected.id === item.id
    );

    if (alreadySelected) return;

    if (selectedItems.length >= MAX_ITEMS) return;

    setSelectedItems((prev) => [...prev, item]);

    if (item.correct) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => Math.max(0, prev - 5));
    }
  };

  /* Remove item */
  const removeItem = (item: EmergencyItem) => {
    if (gameOver) return;

    setSelectedItems((prev) =>
      prev.filter((selected) => selected.id !== item.id)
    );

    if (item.correct) {
      setScore((prev) => Math.max(0, prev - 10));
    } else {
      setScore((prev) => prev + 5);
    }
  };

  /* Finish game */
  const finishGame = () => {
    setGameOver(true);

    const correctItems = selectedItems.filter(
      (item) => item.correct
    ).length;

    const wrongItems = selectedItems.filter(
      (item) => !item.correct
    ).length;

    const missingItems = items.filter(
      (item) =>
        item.correct &&
        !selectedItems.some(
          (selected) => selected.id === item.id
        )
    ).length;

    setResult({
      score,
      correctItems,
      wrongItems,
      missingItems,
    });
  };

  /* Retry */
  const retryGame = () => {
    setSelectedItems([]);
    setScore(0);
    setTime(GAME_TIME);
    setGameOver(false);
    setResult(null);
  };

  /* Result Screen */
  if (result) {
    return (
      <main className="min-h-screen bg-[#e8f4ff] flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-2xl rounded-3xl border-2 border-black bg-white p-10 text-center shadow-[6px_7px_0px_#000]">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-5xl shadow-[3px_4px_0px_#000]">
            {result.score >= 60 ? "🏆" : "🎒"}
          </div>

          <p className="text-sm font-black tracking-widest text-blue-600">
            GAME COMPLETED
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Emergency Bag
          </h1>

          <p className="mt-6 text-6xl font-black text-blue-600">
            {result.score}
            <span className="text-3xl text-slate-400">
              {" "}XP
            </span>
          </p>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-3">

            <div className="rounded-2xl border-2 border-black bg-green-100 p-4">
              <p className="text-2xl font-black">
                {result.correctItems}
              </p>
              <p className="text-xs font-bold">
                Correct
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-red-100 p-4">
              <p className="text-2xl font-black">
                {result.wrongItems}
              </p>
              <p className="text-xs font-bold">
                Wrong
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-blue-100 p-4">
              <p className="text-2xl font-black">
                {result.missingItems}
              </p>
              <p className="text-xs font-bold">
                Missing
              </p>
            </div>

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
              Pack the Emergency Bag 🎒
            </h1>

            <p className="mt-2 text-slate-600">
              Pick the items you need during an emergency.
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
              BAG
            </p>

            <p className="text-2xl font-black">
              {selectedItems.length} / {MAX_ITEMS}
            </p>
          </div>

        </div>


        {/* Game */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Items */}
          <div className="rounded-3xl border-2 border-black bg-white p-7 shadow-[6px_7px_0px_#000]">

            <div className="mb-6">
              <h2 className="text-2xl font-black">
                Choose Your Items
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Click an item to put it in your bag.
              </p>
            </div>


            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {items.map((item) => {

                const selected = selectedItems.some(
                  (selectedItem) =>
                    selectedItem.id === item.id
                );

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    disabled={selected || selectedItems.length >= MAX_ITEMS}
                    className={`rounded-2xl border-2 border-black p-4 text-center font-bold transition-all ${
                      selected
                        ? "bg-blue-500 text-white shadow-[2px_3px_0px_#000] opacity-60"
                        : "bg-[#f5faff] shadow-[3px_4px_0px_#000] hover:-translate-y-1 hover:bg-blue-100"
                    } disabled:cursor-not-allowed`}
                  >

                    <div className="text-4xl">
                      {item.icon}
                    </div>

                    <p className="mt-2">
                      {item.name}
                    </p>

                    <p
                      className={`text-xs font-bold ${
                        item.correct
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.correct
                        ? "+10 XP"
                        : "-5 XP"}
                    </p>

                  </button>
                );
              })}

            </div>

          </div>


          {/* Bag */}
          <div className="rounded-3xl border-2 border-black bg-blue-500 p-7 text-white shadow-[6px_7px_0px_#000]">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <p className="text-sm font-bold text-blue-100">
                  YOUR BAG
                </p>

                <h2 className="text-3xl font-black">
                  Emergency Kit 🎒
                </h2>
              </div>

              <div className="rounded-full border-2 border-black bg-white px-4 py-2 font-black text-black shadow-[2px_3px_0px_#000]">
                {selectedItems.length} / {MAX_ITEMS}
              </div>

            </div>


            {/* Bag */}
            <div className="min-h-[350px] rounded-3xl border-2 border-black bg-blue-400 p-5">

              {selectedItems.length === 0 ? (

                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

                  <div className="text-7xl">
                    🎒
                  </div>

                  <p className="mt-4 text-xl font-black">
                    Your bag is empty!
                  </p>

                  <p className="mt-1 text-sm text-blue-100">
                    Click useful items to pack them.
                  </p>

                </div>

              ) : (

                <div className="grid grid-cols-2 gap-4">

                  {selectedItems.map((item) => (

                    <button
                      key={item.id}
                      onClick={() => removeItem(item)}
                      className="rounded-2xl border-2 border-black bg-white p-5 text-center text-black shadow-[2px_3px_0px_#000] transition hover:-translate-y-1 hover:bg-red-100"
                    >

                      <div className="text-4xl">
                        {item.icon}
                      </div>

                      <p className="mt-1 font-black">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs font-bold text-red-500">
                        Click to remove
                      </p>

                    </button>

                  ))}

                </div>

              )}

            </div>


            {/* Check */}
            <button
              onClick={finishGame}
              className="mt-6 w-full rounded-full border-2 border-black bg-amber-400 py-4 font-black text-black shadow-[4px_5px_0px_#000] transition-all hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
            >
              Check My Bag ✓
            </button>

          </div>

        </div>


        {/* Tip */}
        <div className="mt-8 rounded-3xl border-2 border-black bg-amber-100 p-6 shadow-[4px_5px_0px_#000]">

          <p className="font-black">
            💡 Safety Tip
          </p>

          <p className="mt-1 text-sm text-slate-700">
            Choose essential supplies that can help you stay
            safe and prepared during an emergency.
          </p>

        </div>

      </div>

    </main>
  );
}