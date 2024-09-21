import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons

type RiskStatus = "low" | "medium" | "high";

const MachineCard = ({
  name,
  riskStatus,
  anomalies,
  isFavorite,
}: {
  name: string;
  riskStatus: RiskStatus; // Specify the type for riskStatus
  anomalies: number;
  isFavorite: boolean;
}) => {
  const [isFavorited, setIsFavorited] = useState(isFavorite); // Track the favorite status

  // Define styles based on risk status
  const riskStyles: Record<RiskStatus, { bgColor: string; borderColor: string; textColor: string }> = {
    low: {
      bgColor: "bg-green-200",
      borderColor: "border-green-600",
      textColor: "text-green-800",
    },
    medium: {
      bgColor: "bg-yellow-200",
      borderColor: "border-yellow-600",
      textColor: "text-yellow-800",
    },
    high: {
      bgColor: "bg-red-300",
      borderColor: "border-red-600",
      textColor: "text-red-800",
    },
  };

  const { bgColor, borderColor, textColor } = riskStyles[riskStatus];

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev); // Toggle the favorite status
  };

  return (
    <div className={`w-full h-[350px] rounded-3xl bg-gradient-to-t from-blue-950 to-black-600 shadow-md m-2 p-4 flex flex-col justify-between`}>
      <div className="flex flex-col justify-center gap-4">
        <div className={`${bgColor} ${borderColor} border-4 w-[150px] h-[50px] rounded-3xl ${textColor} text-2xl flex items-center justify-center font-bold`}>
          {riskStatus}
        </div>
        <h2 className="text-5xl text-white font-bold text-center mt-10">{name}</h2>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-white-200">{anomalies} Anomalies</h1>
        <div onClick={toggleFavorite} className="cursor-pointer">
          {isFavorited ? (
            <FaStar className="text-yellow-500 text-2xl" /> // Filled yellow star for favorited
          ) : (
            <FaRegStar className="text-yellow-500 text-2xl" /> // Outlined star for non-favorited
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineCard;
