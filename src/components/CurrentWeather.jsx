import React from "react";

const CurrentWeather = ({ data }) => {
	const {
		cloud_cover,
		feels_like,
		pressure,
		summary,
		temperature,
		uv_index,
		visibility,
		humidity,
		icon_num,
		wind_chill,
	} = data;

	const otherInfoWidgets = [
		{
			id: 0,
			icon: "droplet",
			name: "humidity",
			value: Math.round(humidity),
			unit: "%",
		},
		{
			id: 1,
			icon: "wind",
			name: "wind chill",
			value: Math.round(wind_chill),
			unit: "m^2/h",
		},
		{
			id: 2,
			icon: "bar-chart",
			name: "pressure",
			value: Math.round(pressure),
			unit: "mb",
		},

		{
			id: 3,
			icon: "cloud-sun-rain",
			name: "cloud cover",
			value: Math.round(cloud_cover),
			unit: "%",
		},
		{
			id: 4,
			icon: "eye",
			name: "visibility",
			value: Math.round(visibility),
			unit: "mi",
		},
		{
			id: 5,
			icon: "glasses",
			name: "uv index",
			value: Math.round(uv_index),
			unit: "",
		},
	];
	return (
		<>
			<div className=' w-full h-56 flex flex-row px-12 justify-center'>
				<div className='w-1/4 h-full flex flex-col border mr-6 rounded-lg hover:scale-105 transition-all duration-300 border-white p-4'>
					<div className='flex items-center my-1'>
						<img
							src={`icons/${icon_num}.png`}
							alt={summary}
						/>
					</div>
					<div className='my-1'>
						<div className='text-white text-4xl font-bold font-mono '>
							{temperature}°F
						</div>
						<div className='text-white text-md font-mono'>
							Feels like {feels_like}°F
						</div>
					</div>
					<div className='text-white my-1 font-mono text-2xl font-bold'>
						<h3>{summary}</h3>
					</div>
				</div>
				<div className='w-2/5 h-full ml-6 flex flex-wrap mr-2 rounded-lg hover:scale-105 transition-all duration-300  p-4 border border-white'>
					{otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
						<div
							key={id}
							className='flex w-1/2 h-16 flex-col'>
							<div className='flex  items-center justify-center'>
								<div className='mr-2 text-center text-white text-lg '>
									<i className={`fa-solid fa-${icon}`}></i>
								</div>
								<div className='text-white text-xl font-mono'>
									{value} {unit}
								</div>
							</div>
							<div className='flex items-center text-gray-500 justify-center'>
								<h1>{name}</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CurrentWeather;
