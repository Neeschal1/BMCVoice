import React, { useEffect, useState } from "react";
import HandleReadData from "../api/read";
import Admindetails from "./admindetails";
import { useNavigate } from "react-router-dom";

const Adminhome = () => {
  const [data, setData] = useState([]);
  const [read, setRead] = useState({});
  const navigation = useNavigate();

  const fetchData = async () => {
    try {
      const response = await HandleReadData();
      if (response) {
        setData(response.data);
      }
    } catch (err) {
      console.log("Error: ", err);
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

  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col bg-slate-100 lg:w-full sm:w-full pt-30 pb-10">
      {data.map((item, index) => (
        <div key={index} className="w-full max-w-4xl px-4 mt-5">
          <button
            onClick={() => handlePress(index, item)}
            className="
        w-full 
        bg-[#D8D4FF]
        hover:bg-[#978bff]
        transition 
        rounded-xl 
        p-4 
        shadow-md
        lg:w-full
      "
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-black text-left">
              <div className="flex flex-row items-center justify-between">
                <p className="font-semibold">{item.Name}</p>
                <p className="font-normal text-sm">{item.Phone_Number}</p>
              </div>

              <div className="sm:text-right -mt-2">
                <p className="text-sm font-normal">{item.Address}</p>
              </div>

              <div className="sm:text-right">
                <p className="text-sm font-normal">{item.Content}</p>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Adminhome;
