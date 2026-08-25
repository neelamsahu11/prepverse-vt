"use client";

import { useEffect, useRef, useState } from "react";
import { submitQuiz } from "./quizsubmit.action";

export default function QuizSubmit({
  moduleName,
  score,
  total,
}) {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const submitted = useRef(false);

  useEffect(() => {
    if (submitted.current) return;

    submitted.current = true;

    async function saveResult() {
      try {
        const result = await submitQuiz(
          moduleName,
          score,
          total
        );

        if (result.success) {
          setMessage(
            result.message || "Quiz saved successfully!"
          );

          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1000);
        } else {
          setMessage(
            result.message || "Failed to save quiz."
          );
          setLoading(false);
          submitted.current = false;
        }
      } catch (error) {
        console.error("Quiz submit error:", error);

        setMessage(
          "Something went wrong while saving your result."
        );

        setLoading(false);
        submitted.current = false;
      }
    }

    saveResult();
  }, [moduleName, score, total]);

  return (
    <div className="rounded-xl border-2 border-black bg-gray-50 p-4">
      {loading && (
        <p className="font-semibold text-gray-600">
          Saving your result...
        </p>
      )}

      {!loading && message && (
        <p className="font-bold text-green-600">
          {message}
        </p>
      )}
    </div>
  );
}