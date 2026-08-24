"use server"

import pool from "../../lib/db"

export async function Question() {
    const [question] = await pool.query(
        'select * from questions'
    );
    console.log(question);
    return question;
}

export async function submitQuiz(answers) {
    const ids = Object.keys(answers);
  if (ids.length === 0) return { score: 0, total: 0, results: [] };

  const [rows] = await pool.query(
    `SELECT id, correct_option FROM questions WHERE id IN (${ids.map(() => '?').join(',')})`,
    ids
  );

  let score = 0;
  const results = rows.map((row) => {
    const isCorrect = answers[row.id] === row.correct_option;
    if (isCorrect) score++;
    return { id: row.id, correct: isCorrect, correctOption: row.correct_option };
  });

  return { score, total: rows.length, results };
}