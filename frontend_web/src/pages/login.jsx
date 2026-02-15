import React, { useState } from "react";
import ProtectedRoutes from "../utils/protectedRoutes";
import { useNavigate } from "react-router-dom";

const hardcodedEmail = import.meta.env.VITE_EMAIL
const hardcodedPassword = import.meta.env.VITE_PASSWORD

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === hardcodedEmail && password == hardcodedPassword) {
      localStorage.setItem("authorized_user", "true")
      navigate("/home")
    } else {
      console.log("Wrong Credentials!");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100">
      {/* Phone frame */}
      <div className="w-full max-w-sm rounded-3xl bg-white shadow-xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-4 border-b px-6 py-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
            <span className="font-bold text-white">BMC</span>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Butwal Multiple Campus
            </h2>
            <p className="text-xs text-slate-500">Golpark, Butwal</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="flex flex-col mb-5">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900">
            Login
          </h1>
          <h3 className="text-black/30 -mt-5">Please enter your login details in order to continue :)</h3>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.name) setErrors({ ...errors, name: null });
              }}
              className={`w-full rounded-lg border px-4 py-3 text-black text-sm focus:outline-none focus:ring-2
                ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
                }`}
            />
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                <AlertCircle size={14} /> {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.phone) setPassword({ ...errors, phone: null });
              }}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-black focus:outline-none focus:ring-2
                ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
                }`}
            />
            {errors.password && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                <AlertCircle size={14} /> {errors.password}
              </p>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="px-6 pb-6 flex flex-col items-center gap-2">
          <button onClick={handleLogin} className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
