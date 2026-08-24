"use server";

import pool from "@/lib/db"; // change path if your db.js is somewhere else

export default async function RegistrationAction(formData) {
    try {
        const {
            name,
            email,
            password,
            conformPassword
        } = formData;

        console.log("SERVER ACTION CALLED");

        // Basic validation
        if (!name || !email || !password || !conformPassword) {
            return {
                success: false,
                message: "All fields are required"
            };
        }

        // Check password confirmation
        if (password !== conformPassword) {
            return {
                success: false,
                message: "Passwords do not match"
            };
        }

        // Check if email already exists
        const [existingUser] = await pool.execute(
            "SELECT id FROM users WHERE email = ?",
            [email]
        );

        if (existingUser.length > 0) {
            return {
                success: false,
                message: "Email already registered"
            };
        }

        // Insert user
        const [result] = await pool.execute(
            `INSERT INTO users (name, email, password)
             VALUES (?, ?, ?)`,
            [name, email, password]
        );

        console.log("User registered:", result.insertId);
        const userId = result.insertId;

        await pool.execute(
            `INSERT INTO user_progress
     (user_id, modules_completed, quiz_score, badges_earned, certificates_earned)
     VALUES (?, 0, 0, 0, 0)`,
            [userId]
        );

        return {
            success: true,
            message: "Registration successful"
        };

    } catch (error) {
        console.error("Registration error:", error);

        return {
            success: false,
            message: "Something went wrong"
        };
    }
}