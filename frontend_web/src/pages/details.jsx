import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Details = () => {
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

    // if (name && address && phone) {
    //   navigate("/person/details");
    // }
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
            Details
          </h1>

          {/* Full Details */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Enter your query/suggestion/complain
            </label>
            <input
              type="text"
              placeholder="Enter your complete details"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: null });
              }}
              className={`w-full flex justfy-start align-start rounded-lg border px-4 py-20 text-black text-sm focus:outline-none focus:ring-2
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

          {/* Images */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Attach any images (completely optional)
            </label>
            <input type="file" className="py-6 rounded w-3/12 bg-gray-400"/>
            <input type="file" className="py-6 ml-10 rounded w-3/12 bg-gray-400"/>
            <input type="file" className="py-6 ml-10 rounded w-3/12 bg-gray-400"/>
            <input type="file" className="py-6 mt-5 rounded w-3/12 bg-gray-400"/>
            <input type="file" className="py-6 ml-10 mt-5 rounded w-3/12 bg-gray-400"/>
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

export default Details;
