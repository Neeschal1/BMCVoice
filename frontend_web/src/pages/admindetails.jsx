import React from "react";
import handleDelete from "../api/delete";
import { useNavigate } from "react-router-dom";

const Admindetails = () => {
  const navigation = useNavigate();
  const storedData = localStorage.getItem("userdetails");
  const userDetails = storedData ? JSON.parse(storedData) : null;

  if (!userDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">No data found</h2>
          <p className="text-gray-500 mt-2">Please select a record to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#F2F1FF] p-4 sm:p-6 lg:p-8 px-5">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            User Details
          </h1>
        </div>

        {/* Individual Details Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="bg-[#7364fc] px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Individual Details
            </h2>
          </div>
          <div className="px-6 py-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 font-medium min-w-35">Name:</span>
              <span className="text-gray-800 text-lg font-semibold wrap-break-words">
                {userDetails["Name"]}
              </span>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 font-medium min-w-35">Address:</span>
              <span className="text-gray-800 wrap-break-words">
                {userDetails["Address"]}
              </span>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 font-medium min-w-35">Phone Number:</span>
              <span className="text-gray-800">
                {userDetails["Phone_Number"]}
              </span>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="bg-[#7364fc] px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Additional Information
            </h2>
          </div>
          <div className="px-6 py-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap wrap-break-words">
              {userDetails["Content"] || "No additional information provided."}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this record?")) {
                handleDelete(userDetails["id"], navigation);
              }
            }}
            className="flex-1 sm:flex-none sm:px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete Record
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admindetails;