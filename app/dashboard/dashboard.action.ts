"use server";

import pool from "@/lib/db";
import { cookies } from "next/headers";

const TOTAL_MODULES = 10;

export async function getDashboardData() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return null;
  }

  const [rows] = await pool.execute(
    `
    SELECT
      modules_completed,
      quiz_score,
      badges_earned,
      certificates_earned
    FROM user_progress
    WHERE user_id = ?
    `,
    [userId]
  );

  const progress = (rows as any[])[0];

  const modulesCompleted =
    progress?.modules_completed ?? 0;

  return {
    modulesCompleted,
    totalModules: TOTAL_MODULES,

    progressPercentage: Math.round(
      (modulesCompleted / TOTAL_MODULES) * 100
    ),

    quizScore: progress?.quiz_score ?? 0,
    badgesEarned: progress?.badges_earned ?? 0,
    certificatesEarned:
      progress?.certificates_earned ?? 0,
  };
}