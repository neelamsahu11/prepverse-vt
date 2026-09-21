// // "use server";

// // import pool from "@/lib/db";

// // export default async function RegistrationAction(formData) {
// //   try {
// //     const {
// //       name,
// //       email,
// //       password,
// //       conformPassword,
// //     } = formData;

// //     // Check required fields
// //     if (!name || !email || !password || !conformPassword) {
// //       return {
// //         success: false,
// //         message: "All fields are required",
// //       };
// //     }

// //     // Check password match
// //     if (password !== conformPassword) {
// //       return {
// //         success: false,
// //         message: "Passwords do not match",
// //       };
// //     }

// //     // Check if email already exists
// //     const [existingUser] = await pool.execute(
// //       "SELECT id FROM users WHERE email = ?",
// //       [email]
// //     );

// //     if (existingUser.length > 0) {
// //       return {
// //         success: false,
// //         message: "Email already registered",
// //       };
// //     }

// //     // Create new student
// //     const [result] = await pool.execute(
// //       `INSERT INTO users
// //         (name, email, password, role)
// //        VALUES (?, ?, ?, ?)`,
// //       [name, email, password, "student"]
// //     );

// //     // Create progress record for the new student
// //     await pool.execute(
// //       `INSERT INTO user_progress
// //         (user_id, modules_completed, quiz_score,
// //          badges_earned, certificates_earned)
// //        VALUES (?, ?, ?, ?, ?)`,
// //       [result.insertId, 0, 0, 0, 0]
// //     );

// //     return {
// //       success: true,
// //       message: "Registration successful",
// //     };

// // //   } catch (error) {
// // //     console.error("Registration error:", error);

// // //     return {
// // //       success: false,
// // //       message: "Something went wrong. Please try again.",
// // //     };
// // //   }
// // // }
// // } catch (error) {
// //   console.error("REGISTRATION DATABASE ERROR:", error);

// //   return {
// //     success: false,
// //     message: error instanceof Error ? error.message : "Unknown database error",
// //   };
// // }


// "use server";

// import pool from "@/lib/db";

// export default async function RegistrationAction(formData: {
//   name: string;
//   email: string;
//   password: string;
//   conformPassword: string;
// }) {
//   try {
//     const {
//       name,
//       email,
//       password,
//       conformPassword,
//     } = formData;

//     // Check required fields
//     if (!name || !email || !password || !conformPassword) {
//       return {
//         success: false,
//         message: "All fields are required",
//       };
//     }

//     // Check password match
//     if (password !== conformPassword) {
//       return {
//         success: false,
//         message: "Passwords do not match",
//       };
//     }

//     // Check if email already exists
//     const [existingUser] = await pool.execute(
//       "SELECT id FROM users WHERE email = ?",
//       [email]
//     );

//     if (Array.isArray(existingUser) && existingUser.length > 0) {
//       return {
//         success: false,
//         message: "Email already registered",
//       };
//     }

//     // Create new student
//     const [result] = await pool.execute(
//       `INSERT INTO users
//         (name, email, password, role)
//        VALUES (?, ?, ?, ?)`,
//       [name, email, password, "student"]
//     );

//     // Create progress record
//     await pool.execute(
//       `INSERT INTO user_progress
//         (user_id, modules_completed, quiz_score,
//          badges_earned, certificates_earned)
//        VALUES (?, ?, ?, ?, ?)`,
//       [result.insertId, 0, 0, 0, 0]
//     );

//     return {
//       success: true,
//       message: "Registration successful",
//     };

//   } catch (error) {
//     console.error("REGISTRATION DATABASE ERROR:", error);

//     return {
//       success: false,
//       message:
//         error instanceof Error
//           ? error.message
//           : "Unknown database error",
//     };
//   }
// }

"use server";

import pool from "@/lib/db";

export default async function RegistrationAction(formData) {
  try {
    const {
      name,
      email,
      password,
      conformPassword,
    } = formData;

    if (!name || !email || !password || !conformPassword) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    if (password !== conformPassword) {
      return {
        success: false,
        message: "Passwords do not match",
      };
    }

    const [existingUser] = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return {
        success: false,
        message: "Email already registered",
      };
    }

    const [result] = await pool.execute(
      `INSERT INTO users
        (name, email, password, role)
       VALUES (?, ?, ?, ?)`,
      [name, email, password, "student"]
    );

    await pool.execute(
      `INSERT INTO user_progress
        (user_id, modules_completed, quiz_score,
         badges_earned, certificates_earned)
       VALUES (?, ?, ?, ?, ?)`,
      [result.insertId, 0, 0, 0, 0]
    );

    return {
      success: true,
      message: "Registration successful",
    };

  } catch (error) {
    console.error("REGISTRATION DATABASE ERROR:", error);

    return {
      success: false,
      message: error instanceof Error
        ? error.message
        : "Unknown database error",
    };
  }
}