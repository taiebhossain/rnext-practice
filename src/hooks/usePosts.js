import { useEffect, useState } from 'react';

export default function useWeather() {
  const [weatherData, setWeatherData] = useState({
    location: '',
    climate: '',
  });
  const [loading, setLoading] = useState({
    state: false,
    message: '',
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeatherData(latitude, longitude) {
      try {
        setLoading((loading) => ({
          ...loading,
          state: true,
          message: 'Fetching weather data...',
        }));

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&units=metric`,
        );

        if (!response.ok) {
          const errorMessage = `Fetching weather data failed: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        setWeatherData((weatherData) => ({
          ...weatherData,
          location: data?.name,
          climate: data?.weather[0]?.main,
        }));
      } catch (error) {
        setError(error);
      }
    }
    console.log('Effecting....');
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
}
