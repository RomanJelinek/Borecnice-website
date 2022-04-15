import axios from 'axios';

export const fetchWeatherInfo = async ():Promise<any> => {
  try {
    const response = await axios.post(
      'https://api.openweathermap.org/data/2.5/weather?lat=49.3606783&lon=14.1388289&exclude=hourly,daily&units="metric&lang=cz&appid=b403a9c28918162e9eb0d7a6d8e9eb81'
    );

    let { temp }: { temp: number } = await response.data.main;
    temp = Number((temp - 273.15).toPrecision(2));
    const { description }: { description: string } = await response.data.weather[0];
    return { temp, weatherText: description };
  } catch (error) {
    console.error(error);
  }
}
