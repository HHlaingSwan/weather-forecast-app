import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WeatherContext from "../context/weather.context";

const Body = () => {
	const { currentWeather, dailyForecast } = useContext(WeatherContext);
	return (
		<>
			<CurrentWeather data={currentWeather} />
			<Forecast
				title='21-Day Forecast'
				data={dailyForecast}
			/>
		</>
	);
};

export default Body;
