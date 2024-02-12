import useWeather from './hooks/useWeather';

export default function App() {
  const { weatherData, error, loading } = useWeather();
  console.log(weatherData);
  return (
    <>
      <h1>Weather Dashboard</h1>
      {/* {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}
    </>
  );
}
