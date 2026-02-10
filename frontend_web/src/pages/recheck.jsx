import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import handleSubmit from "../api/create"


const Recheck = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [isSubmitting, setIsSubmitting] = useState(false)

    const {name, address, phone, details} = location.state || {}

    const handleSubmission = () => {
        handleSubmit(name, address, phone, details, setIsSubmitting)
        navigate("/person/details/recheck/success/")
    }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100">
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
          <h1 className="mb-6 text-2xl font-bold text-slate-900">
            Review Your Details
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-900">
              <h4>{name}</h4>
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Address
            </label>
            <div className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-900">
              {address}
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <div className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-900">
              {phone}
            </div>
          </div>

          {/* Details */}
          
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Your Message
              </label>
              <div className="whitespace-pre-wrap rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-900">
                {details}
              </div>
            </div>
        </div>

        {/* Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleSubmission}
            disabled={isSubmitting}
            className={`w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {isSubmitting ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Submitting...
              </>
            ) : (
              "Submit Feedback"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recheck;
