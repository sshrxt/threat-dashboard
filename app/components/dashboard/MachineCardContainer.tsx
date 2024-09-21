import React from 'react';
import machines from '../../../mock-data/index';
import MachineCard from './MachineCard'; // Make sure to import your MachineCard component

const MachineCardContainer = () => {
  return (
    <div className='w-[95vw] mt-2 mx-auto grid grid-cols-3 gap-4'>
      {machines.map((machine, index) => (
        <MachineCard
          key={index} // Use a unique key (e.g., machine name if unique)
          name={machine.name}
          riskStatus={machine.riskStatus}
          anomalies={machine.anomalies}
          isFavorite={machine.isFavorite}
        />
      ))}
    </div>
  );
};

export default MachineCardContainer;
