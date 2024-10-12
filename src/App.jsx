import { useContext } from "react";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import WeatherContext from "./context/weather.context";
import Loading from "./components/Loading";

function App() {
	const { loading } = useContext(WeatherContext);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<NavBar />
					<Body />
				</>
			)}
		</>
	);
}

export default App;
