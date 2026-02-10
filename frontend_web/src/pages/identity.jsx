import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Details from "./details";

const Identity = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleNextStep = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Full name is required";
    if (!address) newErrors.address = "Address is required";
    if (!phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ name, address, phone });
    }

    if (name && address && phone) {
      navigate("/person/details", {
        state: { name, address, phone },
      });
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
          <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900">
            Your <br /> Information
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your complete name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: null });
              }}
              className={`w-full rounded-lg border px-4 py-3 text-black text-sm focus:outline-none focus:ring-2
                ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
                }`}
            />
            {errors.name && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                <AlertCircle size={14} /> {errors.name}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Address
            </label>
            <input
              type="text"
              placeholder="City, Ward No."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                if (errors.address) setErrors({ ...errors, address: null });
              }}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-black focus:outline-none focus:ring-2
                ${
                  errors.address
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
                }`}
            />
            {errors.address && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                <AlertCircle size={14} /> {errors.address}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+977 9800000000"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: null });
              }}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-black focus:outline-none focus:ring-2
                ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-amber-500 focus:ring-amber-200"
                }`}
            />
            {errors.phone && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                <AlertCircle size={14} /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleNextStep}
            className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identity;
