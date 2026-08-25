import pool from "@/lib/db";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
    try {
        const cookieStore = await cookies();

        const userId = cookieStore.get("userId")?.value;

        if (!userId) {
            return null;
        }

        // USER
        const [users] = await pool.execute(
           `SELECT
                u.id,
                u.name,
                u.email,
                p.modules_completed,
                p.quiz_score,
                p.badges_earned,
                p.certificates_earned
             FROM users u
             LEFT JOIN user_progress p
                ON u.id = p.user_id
             WHERE u.id = ?`,
            [userId]
        );

        if (users.length === 0) {
            return null;
        }

        const user = users[0];

        // BADGES
        const [badges] = await pool.execute(
            `SELECT
                b.id,
                b.name,
                b.description,
                b.icon,
                b.color,
                ub.earned_at
             FROM user_badges ub
             JOIN badges b
                ON ub.badge_id = b.id
             WHERE ub.user_id = ?
             ORDER BY ub.earned_at DESC`,
            [userId]
        );

        // CERTIFICATES
        const [certificates] = await pool.execute(
            `SELECT
                c.id,
                c.name,
                c.description,
                c.module_name,
                uc.earned_at
             FROM user_certificates uc
             JOIN certificates c
                ON uc.certificate_id = c.id
             WHERE uc.user_id = ?
             ORDER BY uc.earned_at DESC`,
            [userId]
        );

        console.log("=================================");
console.log("DASHBOARD USER ID:", userId);
console.log("DASHBOARD USER:", user);
console.log("DASHBOARD BADGES:", badges);
console.log("DASHBOARD CERTIFICATES:", certificates);
console.log("=================================");

        return {
            ...user,
            badges,
            certificates,
        };

    } catch (error) {
        console.error("Get user error:", error);
        return null;
    }
}