"use server";

import pool from "@/lib/db";
import { cookies } from "next/headers";

export async function submitQuiz(moduleName, score, total) {
  try {
    // =====================================
    // GET USER
    // =====================================

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    console.log("QUIZ USER ID:", userId);
    console.log("MODULE RECEIVED:", JSON.stringify(moduleName));
    console.log("SCORE:", score);
    console.log("TOTAL:", total);

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

    // =====================================
    // CHECK PREVIOUS SUCCESSFUL ATTEMPT
    // =====================================

    const [existingAttempts] = await pool.execute(
      `
      SELECT id
      FROM quiz_attempts
      WHERE user_id = ?
        AND module_name = ?
        AND score >= 4
      LIMIT 1
      `,
      [userId, moduleName]
    );

    const alreadyCompleted =
      existingAttempts.length > 0;

    // =====================================
    // SAVE QUIZ ATTEMPT
    // =====================================

    await pool.execute(
      `
      INSERT INTO quiz_attempts
      (user_id, module_name, score, total)
      VALUES (?, ?, ?, ?)
      `,
      [userId, moduleName, score, total]
    );

    // =====================================
    // CREATE USER PROGRESS IF NEEDED
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
        quiz_score = GREATEST(
          quiz_score,
          VALUES(quiz_score)
        )
      `,
      [userId, percentage]
    );

    // =====================================
    // COMPLETE MODULE
    // =====================================

    if (score >= 4 && !alreadyCompleted) {

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
        "MODULE COMPLETED FOR USER:",
        userId
      );
    }

    // =====================================
    // BADGE
    // =====================================

   // =====================================
// BADGE
// =====================================

if (score >= 4) {

  const badgeMap = {
    "Earthquakes": 1,
    "Flood Safety": 2,
    "Fire Safety": 3,
    "Medical Emergency & First Aid": 4,
  };

  const badgeId = badgeMap[moduleName];

  console.log("=================================");
  console.log("BADGE MODULE:", moduleName);
  console.log("BADGE ID:", badgeId);
  console.log("USER ID:", userId);

  if (badgeId) {

    const [existingBadge] = await pool.execute(
      `
      SELECT id
      FROM user_badges
      WHERE user_id = ?
        AND badge_id = ?
      `,
      [userId, badgeId]
    );

    console.log("EXISTING BADGE:", existingBadge);

    if (existingBadge.length === 0) {

      await pool.execute(
        `
        INSERT INTO user_badges
        (user_id, badge_id)
        VALUES (?, ?)
        `,
        [userId, badgeId]
      );

      await pool.execute(
        `
        UPDATE user_progress
        SET badges_earned = badges_earned + 1
        WHERE user_id = ?
        `,
        [userId]
      );

      console.log("BADGE AWARDED:", badgeId);

    } else {

      console.log("USER ALREADY HAS BADGE:", badgeId);

    }
  }
}


    console.log("=================================");
console.log("MODULE NAME FROM QUIZ:", moduleName);
console.log("USER ID:", userId);
console.log("SCORE:", score);
console.log("TOTAL:", total);
console.log("=================================");

    // =====================================
    // CERTIFICATE
    // =====================================

    if (score >= 4) {
      console.log("MODULE FROM QUIZ:", JSON.stringify(moduleName));

const [allCertificates] = await pool.execute(
  `SELECT id, name, module_name FROM certificates`
);

console.log("ALL CERTIFICATES FROM NEXT:", allCertificates);

      console.log(
        "SEARCHING CERTIFICATE FOR:",
        JSON.stringify(moduleName)
      );

      const [certificateRows] =
        await pool.execute(
          `
          SELECT id, name, module_name
          FROM certificates
          WHERE TRIM(module_name) = TRIM(?)
          LIMIT 1
          `,
          [moduleName]
        );

      console.log(
        "CERTIFICATE FOUND:",
        certificateRows
      );

      if (certificateRows.length > 0) {

        const certificateId =
          certificateRows[0].id;

        // Check whether user already has certificate

        const [existingCertificate] =
          await pool.execute(
            `
            SELECT id
            FROM user_certificates
            WHERE user_id = ?
              AND certificate_id = ?
            `,
            [userId, certificateId]
          );

        if (existingCertificate.length === 0) {

          await pool.execute(
            `
            INSERT INTO user_certificates
            (user_id, certificate_id)
            VALUES (?, ?)
            `,
            [userId, certificateId]
          );

          await pool.execute(
            `
            UPDATE user_progress
            SET certificates_earned =
              certificates_earned + 1
            WHERE user_id = ?
            `,
            [userId]
          );

          console.log(
            "CERTIFICATE AWARDED:",
            certificateId
          );

        } else {

          console.log(
            "USER ALREADY HAS CERTIFICATE:",
            certificateId
          );
        }

      } else {

        console.log(
          "NO CERTIFICATE FOUND FOR MODULE:",
          JSON.stringify(moduleName)
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