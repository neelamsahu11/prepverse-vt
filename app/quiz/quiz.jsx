
'use client'

import { useState } from "react"
import { submitQuiz } from "./quiz.action"

export default function QuizClient({question}){
    const [currentIndex,setCurrentIndex] = useState(0)
    const [answers,setAnswers] = useState({})
    const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

    const currentQuestion = question[currentIndex]
    const isLastQuestion = currentIndex === question.length - 1;
    const hasAnswered = answers[currentQuestion?.id] !== undefined;

      const handleSelect = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

    const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
    const handleNext = () => {
    if (!isLastQuestion ) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
   const handleSubmit = async () => {
    setLoading(true);
    const res = await submitQuiz(answers);
    setResult(res);
    setLoading(false);
  };

  if (result) {
    return (
     <div className="min-h-screen bg-[#e8f4ff] flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-2xl rounded-3xl border-2 border-black bg-white p-10 text-center shadow-[6px_7px_0px_#000]">

          <p className="mb-3 text-sm font-black tracking-widest text-blue-600">
            QUIZ COMPLETED
          </p>

          <h2 className="text-5xl font-black">
            <span className="text-blue-600">{result.score}</span>
            <span className="text-slate-400"> / {result.total}</span>
          </h2>

          <p className="mt-3 text-slate-500">
            Great job! Try again to improve your score.
          </p>

          <button
            onClick={() => {
              setResult(null)
              setAnswers({})
              setCurrentIndex(0)
            }}
            className="mt-8 rounded-full border-2 border-black bg-amber-400 px-8 py-3 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000]"
          >
            Retry Quiz ↻
          </button>

        </div>

      </div>
    );
  }
   return(
    <div className="min-h-screen bg-[#e8f4ff] px-6 py-12">

      <div className="mx-auto max-w-3xl">

        {/* Quiz Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>
            <p className="text-sm font-black tracking-widest text-blue-600">
              DISASTER MANAGEMENT
            </p>

            <h1 className="text-3xl font-black">
              Knowledge Quiz
            </h1>
          </div>

          <p className="rounded-full border-2 border-black bg-white px-5 py-2 font-black shadow-[3px_4px_0px_#000]">
            {currentIndex + 1} / {question.length}
          </p>

        </div>


        {/* Progress Bar */}

        <div className="mb-8 h-4 overflow-hidden rounded-full border-2 border-black bg-white">

          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / question.length) * 100}%`
            }}
          />

        </div>


        {/* Question Card */}

        <div className="rounded-3xl border-2 border-black bg-white p-8 shadow-[6px_7px_0px_#000]">

          {/* Question Number */}

          <p className="mb-6 inline-block rounded-full border-2 border-black bg-amber-300 px-4 py-2 text-sm font-black shadow-[2px_3px_0px_#000]">
            Question {currentIndex + 1}
          </p>


          {/* Question */}

          <div className="mb-8">

            <p className="text-2xl font-black leading-relaxed">
              {currentQuestion.question_text}
            </p>

          </div>


          {/* Options */}

          <div className="space-y-4">

            {['a', 'b', 'c', 'd'].map((opt) => {

              const isSelected =
                answers[currentQuestion.id] === opt

              return (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-black p-4 font-bold transition-all ${
                    isSelected
                      ? "bg-blue-500 text-white shadow-[3px_4px_0px_#000]"
                      : "bg-[#f5faff] hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[3px_4px_0px_#000]"
                  }`}
                >

                  <input
                    type="radio"
                    name={`q-${currentQuestion.id}`}
                    checked={answers[currentQuestion.id] === opt}
                    onChange={() =>
                      handleSelect(currentQuestion.id, opt)
                    }
                    className="h-5 w-5 accent-blue-600"
                  />

                  <span>
                    {currentQuestion[`option_${opt}`]}
                  </span>

                </label>
              )
            })}

          </div>


          {/* Navigation */}

          <div className="mt-8 flex justify-between border-t-2 border-slate-200 pt-6">

            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className="rounded-full border-2 border-black bg-white px-7 py-3 font-black shadow-[3px_4px_0px_#000] transition-all hover:-translate-x-1 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
            >
              ← Back
            </button>


            {isLastQuestion ? (

              <button
                onClick={handleSubmit}
                disabled={!hasAnswered || loading}
                className="rounded-full border-2 border-black bg-amber-400 px-7 py-3 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                {loading ? 'Submitting...' : 'Submit Quiz ✓'}
              </button>

            ) : (

              <button
                onClick={handleNext}
                disabled={!hasAnswered}
                className="rounded-full border-2 border-black bg-blue-500 px-8 py-3 font-black text-white shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                Next →
              </button>

            )}

          </div>

        </div>

      </div>

    </div>
   )
}