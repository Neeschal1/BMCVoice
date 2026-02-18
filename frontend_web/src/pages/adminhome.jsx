import React, { useEffect, useState } from "react";
import HandleReadData from "../api/read";
import { useNavigate } from "react-router-dom";

const Adminhome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await HandleReadData();
      if (response) {
        setData(response.data);
      }
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (index, item) => {
    console.log("Index: ", index, " and item: ", item);
    localStorage.setItem("userdetails", JSON.stringify(item));
    navigation("/home/details");
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading records...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage and view all user records ({data.length} total)
          </p>
        </div>

        {/* Records Grid */}
        {data.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No records found
            </h3>
            <p className="text-gray-500">There are no user records to display.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => handlePress(index, item)}
                className="
                  group
                  bg-white
                  hover:bg-linear-to-br hover:from-indigo-50 hover:to-purple-50
                  transition-all
                  duration-300
                  rounded-xl
                  p-5 sm:p-6
                  shadow-md
                  hover:shadow-xl
                  border border-gray-100
                  hover:border-indigo-200
                  text-left
                  w-full
                  transform hover:-translate-y-1
                "
              >
                {/* Header with Name and Phone */}
                <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex-1 min-w-0 mr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                        <span className="text-white font-semibold text-lg">
                          {item.Name?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 truncate group-hover:text-indigo-700 transition-colors">
                        {item.Name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm font-medium">{item.Phone_Number}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <div className="flex items-start gap-2 text-gray-600">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm wrap-break-words">{item.Address}</span>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.Content}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="flex items-center justify-end text-indigo-600 group-hover:text-indigo-700 font-medium text-sm">
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Adminhome;