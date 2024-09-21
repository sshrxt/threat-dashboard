import React, { useState, useEffect } from "react";
import machineData from "../../../mock-data/index";
import MachineCard from "./MachineCard";
import Sort from "./Sort"; // Import the Sort component

const riskPriority: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

const MachineCardContainer = () => {
  const [machines, setMachines] = useState(machineData);
  const [sortOption, setSortOption] = useState("machine-number");

  const sortMachines = (option: string) => {
    let sortedMachines;

    if (option === "threats") {
      const favorites = machines.filter((machine) => machine.isFavorite);
      const nonFavorites = machines.filter((machine) => !machine.isFavorite);
      
      const sortedNonFavorites = nonFavorites.sort((a, b) => {
        const riskA = riskPriority[a.riskStatus] || 0;
        const riskB = riskPriority[b.riskStatus] || 0;
        return riskB - riskA; // Higher risk status first
      });
      sortedMachines = [...favorites, ...sortedNonFavorites];
    } else if (option === "machine-number") {
      // Separate favorites and non-favorites
      const favorites = machines.filter((machine) => machine.isFavorite);
      const nonFavorites = machines.filter((machine) => !machine.isFavorite);
      const sortedNonFavorites = nonFavorites.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      sortedMachines = [...favorites, ...sortedNonFavorites];
    } else {
      // Default sorting if option doesn't match
      sortedMachines = [...machines].sort((a, b) => {
        const riskA = riskPriority[a.riskStatus] || 0;
        const riskB = riskPriority[b.riskStatus] || 0;
        return riskB - riskA; // Higher risk status first
      });
    }

    setMachines(sortedMachines);
    setSortOption(option); // Update the current sort option
  };

  const toggleFavorite = (index: number) => {
    setMachines((prevMachines) => {
      const updatedMachines = prevMachines.map((machine, idx) => {
        if (idx === index) {
          return { ...machine, isFavorite: !machine.isFavorite };
        }
        return machine;
      });
      return updatedMachines;
    });
  };

  // Sort machines on initial load
  useEffect(() => {
    sortMachines(sortOption);
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <Sort currentSort={sortOption} onSortChange={sortMachines} />{" "}
      {/* Add Sort component */}
      <div className="w-[95vw] mt-2 mx-auto grid grid-cols-3 gap-4">
        {machines.map((machine, index) => (
          <MachineCard
            key={index}
            name={machine.name}
            riskStatus={machine.riskStatus}
            anomalies={machine.anomalies}
            isFavorite={machine.isFavorite}
            onToggleFavorite={() => toggleFavorite(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MachineCardContainer;
