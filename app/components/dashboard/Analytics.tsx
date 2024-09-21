import React from "react";

const Analytics = () => {
  return (
    <div className=" mt-10 my-5 flex items-center justify-center gap-10 w-[90vw] mx-auto">
      <div className="w-[380px] h-30 rounded-3xl flex flex-col justify-start items-start shadow-md bg-gradient-to-t from-blue-950 to-black-600 py-3 px-6 border-white border">
        <h3 className="text-xl text-blue-400 font-bold">Intrusion Attempts</h3>
        <h1 className="text-white text-3xl">9</h1>
      </div>
      <div className="w-[380px] h-30 rounded-3xl flex flex-col justify-start items-start shadow-md bg-gradient-to-t from-blue-950 to-black-500 py-3 px-6 border-white border">
        <h3 className="text-xl text-blue-400 font-bold">Anomaly Alerts</h3>
        <h1 className="text-white text-3xl">31</h1>
      </div>
      <div className="w-[380px] h-30 rounded-3xl flex flex-col justify-start items-start shadow-md bg-gradient-to-t from-blue-950 to-black-500 py-3 px-6 border-white border">
        <h3 className="text-xl text-blue-400 font-bold">Network Traffic</h3>
        <h1 className="text-white text-3xl">10.6K</h1>
      </div>
      <div className="w-[380px] h-30 rounded-3xl flex flex-col justify-start items-start shadow-md bg-gradient-to-t from-blue-950 to-black-500 py-3 px-6 border-white border">
        <h3 className="text-xl text-blue-400 font-bold">Threats Blocked</h3>
        <h1 className="text-white text-3xl">10</h1>
      </div>
    </div>
  );
};

export default Analytics;
