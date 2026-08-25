"use client";

import React, { useState } from "react";
import QuizSubmit from "./quizsubmit";

const QuizClient = ({ module, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
  if (!selectedAnswer) return;

  const isCorrect =
    selectedAnswer === question.correct_answer;

  const newScore = isCorrect
    ? score + 1
    : score;

  if (currentQuestion < questions.length - 1) {

    setScore(newScore);
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);

  } else {

    // Save the final score correctly
    setScore(newScore);
    setShowResult(true);
  }
};

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-white to-[#F0FDF4] flex items-center justify-center px-4">

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">

          <h1 className="text-3xl font-bold text-[#006B7A] mb-4">
            Quiz Completed!
          </h1>

          <p className="text-xl font-semibold text-gray-700">
            {module}
          </p>

          <p className="text-2xl font-bold mt-4">
            Score: {score} / {questions.length}
          </p>

          <div className="mt-6">
            <QuizSubmit
              moduleName={module}
              score={score}
              total={questions.length}
            />
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl"
          >
            Try Again
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-white to-[#F0FDF4] py-10 px-4">

      <div className="max-w-3xl mx-auto">

        {/* Quiz Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

          <h1 className="text-3xl font-bold text-[#006B7A]">
            {module}
          </h1>

          <p className="text-gray-500 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>

        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">

            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-4 rounded-xl border-2 transition ${
                  selectedAnswer === option
                    ? "border-[#00B4D4] bg-[#E0F7FA]"
                    : "border-gray-200 hover:border-[#00B4D4]"
                }`}
              >
                <span className="font-bold mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>

                {option}
              </button>
            ))}

          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-8">

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="bg-[#006B7A] text-white px-8 py-3 rounded-xl disabled:opacity-40"
            >
              {currentQuestion === questions.length - 1
                ? "Submit Quiz"
                : "Next"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default QuizClient;