"use server";

import pool from "@/lib/db";
import { cookies } from "next/headers";

export async function submitQuiz(
  moduleName: string,
  score: number,
  total: number
) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    console.log("QUIZ USER ID:", userId);

    if (!userId) {
      return {
        success: false,
        message: "Please login first",
      };
    }

    // =====================================
    // CALCULATE PERCENTAGE
    // =====================================

    const percentage =
      total > 0
        ? Math.round((score / total) * 100)
        : 0;

    // 80% or above = module passed
    const passed = percentage >= 80;

    // =====================================
    // CHECK IF THIS MODULE WAS ALREADY PASSED
    // =====================================

    const [existingAttempts] = await pool.execute(
      `
      SELECT id
      FROM quiz_attempts
      WHERE user_id = ?
      AND module_name = ?
      AND total > 0
      AND ((score / total) * 100) >= 80
      LIMIT 1
      `,
      [userId, moduleName]
    );

    const alreadyCompleted =
      (existingAttempts as any[]).length > 0;

    console.log("MODULE:", moduleName);
    console.log("SCORE:", score, "/", total);
    console.log("PERCENTAGE:", percentage);
    console.log("PASSED:", passed);
    console.log("ALREADY COMPLETED:", alreadyCompleted);

    // =====================================
    // SAVE QUIZ ATTEMPT
    // =====================================

    await pool.execute(
      `
      INSERT INTO quiz_attempts
      (user_id, module_name, score, total)
      VALUES (?, ?, ?, ?)
      `,
      [
        userId,
        moduleName,
        score,
        total,
      ]
    );

    // =====================================
    // CREATE / UPDATE USER PROGRESS
    // =====================================

    await pool.execute(
      `
      INSERT INTO user_progress
      (
        user_id,
        modules_completed,
        quiz_score,
        badges_earned,
        certificates_earned
      )
      VALUES (?, 0, ?, 0, 0)

      ON DUPLICATE KEY UPDATE
        quiz_score =
          GREATEST(
            quiz_score,
            VALUES(quiz_score)
          )
      `,
      [
        userId,
        percentage,
      ]
    );

    // =====================================
    // INCREMENT COMPLETED MODULE
    // ONLY ON FIRST PASS
    // =====================================

    if (passed && !alreadyCompleted) {

      await pool.execute(
        `
        UPDATE user_progress
        SET modules_completed =
          modules_completed + 1
        WHERE user_id = ?
        `,
        [userId]
      );

      console.log(
        "MODULE COMPLETED. Progress incremented."
      );
    }

    // =====================================
    // BADGE
    // =====================================

    if (passed) {

      const badgeId = 1;

      const [existingBadge] =
        await pool.execute(
          `
          SELECT id
          FROM user_badges
          WHERE user_id = ?
          AND badge_id = ?
          LIMIT 1
          `,
          [
            userId,
            badgeId,
          ]
        );

      if (
        (existingBadge as any[]).length === 0
      ) {

        await pool.execute(
          `
          INSERT INTO user_badges
          (user_id, badge_id)
          VALUES (?, ?)
          `,
          [
            userId,
            badgeId,
          ]
        );

        await pool.execute(
          `
          UPDATE user_progress
          SET badges_earned =
            badges_earned + 1
          WHERE user_id = ?
          `,
          [userId]
        );
      }
    }

    // =====================================
    // SUCCESS
    // =====================================

    return {
      success: true,
      message: `Quiz saved! Score: ${score}/${total}`,
      score,
      total,
      percentage,
    };

  } catch (error) {

    console.error(
      "Quiz submit error:",
      error
    );

    return {
      success: false,
      message: "Failed to save quiz result",
    };
  }
}