import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = ({ referenceId, onReset }) => {
  const navigate = useNavigate();
  const newSubmit = () => {
    navigate("/");
  };
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
        <div className="px-6 py-6 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-amber-100">
              <Check size={48} strokeWidth={3} className="text-amber-500" />
            </div>
          </div>

          <h1 className="mb-4 text-2xl font-bold text-slate-900">
            Successfully <br /> Submitted!
          </h1>

          <p className="mb-6 text-sm text-slate-600">
            Thank you for taking the time to share your feedback. Campus Chief
            (Dr. Arun Chhetri) will carefully review your submission and take
            appropriate action.
          </p>

          {referenceId && (
            <div className="mb-6 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3">
              <p className="text-xs text-slate-500">REFERENCE ID</p>
              <p className="text-sm font-semibold text-slate-900">
                {referenceId}
              </p>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="px-6 pb-6">
          <button
            onClick={newSubmit}
            className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Submit Another Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
