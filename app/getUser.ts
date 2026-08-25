import pool from "@/lib/db";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  try {
    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return null;
    }

    // =========================
    // USER + PROGRESS
    // =========================
    const [userRows] = await pool.execute(
      `
      SELECT
        u.id,
        u.name,
        u.email,

        COALESCE(up.modules_completed, 0) AS modules_completed,
        COALESCE(up.quiz_score, 0) AS quiz_score,
        COALESCE(up.badges_earned, 0) AS badges_earned,
        COALESCE(up.certificates_earned, 0) AS certificates_earned

      FROM users u

      LEFT JOIN user_progress up
        ON u.id = up.user_id

      WHERE u.id = ?
      `,
     [userId]
    );

    if ((userRows as any[]).length === 0) {
      return null;
    }

    const user = (userRows as any[])[0];
   console.log("QUIZ USER ID:", 2);

    // =========================
    // BADGES FOR THIS USER
    // =========================
    const [badgeRows] = await pool.execute(
      `
      SELECT
        b.id,
        b.name,
        b.description,
        b.icon,
        b.color,
        ub.earned_at

      FROM user_badges ub

      INNER JOIN badges b
        ON ub.badge_id = b.id

      WHERE ub.user_id = ?

      ORDER BY ub.earned_at DESC
      `,
      [userId]
    );

    // =========================
    // CERTIFICATES FOR THIS USER
    // =========================
    const [certificateRows] = await pool.execute(
      `
      SELECT
        c.id,
        c.name,
        c.description,
        c.module_name,
        uc.earned_at

      FROM user_certificates uc

      INNER JOIN certificates c
        ON uc.certificate_id = c.id

      WHERE uc.user_id = ?

      ORDER BY uc.earned_at DESC
      `,
      [userId]
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,

      modules_completed: Number(user.modules_completed),
      quiz_score: Number(user.quiz_score),
      badges_earned: Number(user.badges_earned),
      certificates_earned: Number(user.certificates_earned),

      badges: badgeRows as any[],
      certificates: certificateRows as any[],
    };

  } catch (error) {
    console.error("getLoggedInUser error:", error);
    return null;
  }
}