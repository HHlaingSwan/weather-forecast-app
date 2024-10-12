import { createContext, useEffect, useState } from "react";
import defaultLocation from "../Api/location";
import { getWeatherData } from "../Api";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [location, setLocation] = useState(defaultLocation);
	const [loading, setLoading] = useState(true);
	const [currentWeather, setCurrentWeather] = useState({});
	const [dailyForecast, setDailyForecast] = useState([]);

	useEffect(() => {
		const _getWeatherData = async () => {
			setLoading(true);

			const cw = await getWeatherData("current", "auto", location.place_id);
			setCurrentWeather(cw.current);

			const df = await getWeatherData("daily", "auto", location.place_id);
			setDailyForecast(df.daily.data);

			setLoading(false);
		};
		_getWeatherData();
	}, [location]);
	return (
		<WeatherContext.Provider
			value={{ location, setLocation, loading, currentWeather, dailyForecast }}>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
