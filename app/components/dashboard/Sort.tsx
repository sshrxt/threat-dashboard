import React from "react";
import { FaSortDown } from "react-icons/fa";

interface SortProps {
  currentSort: string;
  onSortChange: (option: string) => void; // Callback to handle sort changes
}


const Sort: React.FC<SortProps> = ({ currentSort, onSortChange }) => {
  return (
    <div className="h-[5vh] w-[90vw] mx-auto flex items-center justify-center">
      <div className="relative w-[200px] h-10 rounded-3xl flex items-center shadow-md bg-gradient-to-t from-blue-950 to-black-600 ">
        <select className="w-full h-full rounded-3xl bg-transparent text-blue-400 font-bold appearance-none pr-10 pl-4"
         value={currentSort} // Controlled component
         onChange={(e) => onSortChange(e.target.value)} >
          <option value="machine-number">Sort by: Machine</option>
          <option value="threats">Sort by: Threats</option>
        </select>
        <div className="absolute right-3">
          <FaSortDown className="text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Sort;
