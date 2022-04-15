import { BorecniceContext } from '../../context/BorecniceContext';
import React, { useContext } from 'react';
import Spot from './spots/Spot';
import './TouristMap.css';

const TouristMap = () => {
  const spotState = useContext(BorecniceContext);

  return (
    <>
      <div className="tourist__map__container">
        <Spot />
      </div>
    </>
  );
};

export default TouristMap;
