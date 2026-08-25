"use server";

import pool from "@/lib/db";
import { cookies } from "next/headers";

export default async function LoginAction(formData) {
    try {
        const { email, password } = formData;

        if (!email || !password) {
            return {
                success: false,
                message: "Email and password are required",
            };
        }

        const [users] = await pool.execute(
            `SELECT id, name, email, password, role
             FROM users
             WHERE email = ?`,
            [email]
        );

        if (users.length === 0) {
            return {
                success: false,
                message: "Invalid email or password",
            };
        }

        const user = users[0];

        if (user.password !== password) {
            return {
                success: false,
                message: "Invalid email or password",
            };
        }

        // Store user ID
        const cookieStore = await cookies();

        cookieStore.set("userId", String(user.id), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });

        // Store role
        cookieStore.set("userRole", user.role, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });

        return {
            success: true,
            message: "Login successful",
            role: user.role,
        };

    } catch (error) {
        console.error("Login error:", error);

        return {
            success: false,
            message: "Something went wrong",
        };
    }
}