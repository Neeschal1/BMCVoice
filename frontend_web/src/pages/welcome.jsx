import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate("/person")
  }

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
            Share Your <br /> Voice With Us
          </h1>

          

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-600">
            We value your feedback. Your suggestions and complaints help us
            improve our services and create a better environment for everyone.
          </p>
        </div>

        {/* Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleContinue}
            className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-white transition
              hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-amber-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
