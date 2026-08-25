"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import LoginAction from "./login.action";
import { useRouter } from "next/navigation";



interface LoginFormData {
  email: string;
  password: string;
  role:string;
}

const Login: React.FC = () => {

  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    role:"user",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const LoginData = {
      email: formData.email.trim(),
      password: formData.password.trim(),
      role: formData.role,
    };

    const result = await LoginAction(LoginData);

    if (result.success) {

      if (result.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }

    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#e8f4ff] px-6 py-10">

      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[7px_8px_0px_#000] md:grid-cols-2">

          {/* Left Side */}
          <div className="relative hidden overflow-hidden bg-blue-500 p-10 md:flex md:flex-col md:justify-between">

            <div className="relative z-10">
              <p className="text-sm font-black tracking-widest text-amber-300">
                DISASTER MANAGEMENT
              </p>

              <h1 className="mt-4 text-5xl font-black leading-tight text-white">
                Welcome
                <br />
                Back!
              </h1>

              <p className="mt-5 max-w-sm text-lg leading-7 text-blue-50">
                Continue your preparation journey and keep building your
                disaster-readiness skills.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-2 border-black bg-amber-300" />

            <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full border-2 border-black bg-blue-400" />

            <div className="relative z-10 mt-10 flex items-center justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-7xl shadow-[5px_6px_0px_#000]">
                🛡️
              </div>
            </div>

          </div>


          {/* Login Form */}
          <div className="p-7 sm:p-10 md:p-12">

            <div className="mb-8">
              <p className="mb-2 text-sm font-black tracking-widest text-blue-600">
                WELCOME BACK
              </p>

              <h2 className="text-4xl font-black">
                Login
              </h2>

              <p className="mt-2 text-slate-500">
                Sign in to continue your journey.
              </p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}

              <div><label className="font-bold">Role</label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={(e) =>
                    handleInputChange("role", e.target.value)
                  }
                  className="rounded-xl border-2 border-black px-4 py-3"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select></div>
              <div>
                <label className="mb-2 block text-sm font-black">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange("email", e.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border-2 border-black bg-[#f5faff] px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:shadow-[3px_4px_0px_#000]"
                />
              </div>


              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-black">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border-2 border-black bg-[#f5faff] px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:shadow-[3px_4px_0px_#000]"
                />
              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-full border-2 border-black bg-amber-400 px-7 py-3.5 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              >
                Login →
              </button>


              {/* Message */}
              {message && (
                <p className="rounded-2xl border-2 border-black bg-red-100 p-3 text-center text-sm font-bold text-red-600">
                  {message}
                </p>
              )}


              {/* Register */}
              <p className="pt-2 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-black text-blue-600 underline decoration-2 underline-offset-4 transition hover:text-blue-800"
                >
                  Register
                </Link>
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;