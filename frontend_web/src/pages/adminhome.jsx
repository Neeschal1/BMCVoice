import React, { useEffect, useState } from "react";
import HandleReadData from "../api/read";

const Adminhome = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100">
      {data.map((item) => (
        <div key={item.id}>
          <h1 className="text-black">{item.Name}</h1>
          <h1 className="text-black">{item.Address}</h1>
          <h1 className="text-black">{item.Phone_Number}</h1>
          <p className="text-black">{item.Content}</p>
          <h1 className="text-black">{item.Name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Adminhome;
