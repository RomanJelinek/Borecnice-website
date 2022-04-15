import { fetchWeatherInfo } from '../api/FetchWeatherData';
import React, { createContext, useEffect, useState } from 'react';

interface BorecniceDataTypes {
  temp: number | null;
  weatherText: string | null;
}

export const BorecniceContext = createContext<any>(null);

export const BorecniceData: React.FC = ({ children }) => {
  const [weatherData, setWeatherData] = useState<BorecniceDataTypes>({
    temp: 0,
    weatherText: '',
  });
  
  const [spotOpen, setSpotOpen] = useState(false)

  const fetchWeather = async () => {
    let data = await fetchWeatherInfo();
    setWeatherData(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <BorecniceContext.Provider value={{weatherData, spotOpen, setSpotOpen}}>{children}</BorecniceContext.Provider>
  );
};
