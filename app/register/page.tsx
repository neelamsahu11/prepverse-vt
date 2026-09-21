'use client'
import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RegistrationAction from "./registration.action"
import { Form } from "@base-ui/react";


interface RegisterFormData{
    name:string;
    email:string;
    password:string;
    conformPassword:string;
}

    const Register: React.FC = ()=>{
        const router = useRouter();
    const [formData, setFormData] = useState<RegisterFormData>({
            name:"",
            email:"",
            password:"",
            conformPassword:"",
        })


    const handleInputChange = (name:string, value:string)=>{
        setFormData((prev)=>({
            ...prev,
            [name] : value,
        }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("REGISTER BUTTON CLICKED");

    const RegisterData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
        conformPassword: formData.conformPassword.trim(),
    };

    const result = await RegistrationAction(RegisterData);

    if (result.success) {
        router.push("/login");
    } else {
        alert(result.message);
    }
};

    
    

return(
    <div className="min-h-screen bg-[#e8f4ff] px-6 py-10">

      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">

        {/* Main Card */}
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[7px_8px_0px_#000] md:grid-cols-2">

          {/* Left Illustration / Branding */}
          <div className="relative hidden overflow-hidden bg-blue-500 p-10 md:flex md:flex-col md:justify-between">

            <div className="relative z-10">
              <p className="text-sm font-black tracking-widest text-amber-300">
                DISASTER MANAGEMENT
              </p>

              <h1 className="mt-4 text-5xl font-black leading-tight text-white">
                Be Ready.
                <br />
                Be Safe.
              </h1>

              <p className="mt-5 max-w-sm text-lg leading-7 text-blue-50">
                Create your account and start your journey towards becoming
                disaster-ready.
              </p>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-2 border-black bg-amber-300" />

            <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full border-2 border-black bg-blue-400" />

            <div className="relative z-10 mt-10 flex items-center justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-black bg-amber-300 text-7xl shadow-[5px_6px_0px_#000]">
                🛡️
              </div>
            </div>

          </div>


          {/* Registration Form */}
          <div className="p-7 sm:p-10 md:p-12">

            <div className="mb-8">
              <p className="mb-2 text-sm font-black tracking-widest text-blue-600">
                GET STARTED
              </p>

              <h2 className="text-4xl font-black">
                Create Account
              </h2>

              <p className="mt-2 text-slate-500">
                Join us and start preparing today.
              </p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-black">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("name", e.target.value)
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border-2 border-black bg-[#f5faff] px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:shadow-[3px_4px_0px_#000]"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-black">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Create password"
                  className="w-full rounded-2xl border-2 border-black bg-[#f5faff] px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:shadow-[3px_4px_0px_#000]"
                />
              </div>


              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-black">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="conformPassword"
                  value={formData.conformPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("conformPassword", e.target.value)
                  }
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border-2 border-black bg-[#f5faff] px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:shadow-[3px_4px_0px_#000]"
                />
              </div>


              {/* Register Button */}
              <button
                type="submit"
                className="mt-3 w-full rounded-full border-2 border-black bg-amber-400 px-7 py-3.5 font-black shadow-[4px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              >
                Create Account →
              </button>


              {/* Login */}
              <p className="pt-3 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-black text-blue-600 underline decoration-2 underline-offset-4 hover:text-blue-800"
                >
                  Login
                </Link>
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
)
}
export default Register;