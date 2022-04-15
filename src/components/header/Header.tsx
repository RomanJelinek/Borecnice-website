import { BorecniceContext } from '../../context/BorecniceContext';
import React, { useContext } from 'react';
import './Header.css';

export const Header: React.FC = () => {
  const weather = useContext(BorecniceContext);

  return (
    <div className="header__container">
      <h3>
        Vítejte v metropoli Jihočeského kraje. Právě je{' '}
        {weather.weatherData.weatherText} a máme {weather.weatherData.temp}{' '}
        stupňů.
      </h3>
    </div>
  );
};
