import React from "react";

const DailyForecast = ({ singleData }) => {
	const { day, icon, summmary, temperature_max, temperature_min } = singleData;
	return (
		<>
			<div className='flex flex-col  border border-white rounded-lg p-4 items-center justify-center gap-4 hover:bg-white/20 hover:text-white hover:cursor-pointer transition-all duration-300'>
				<div className='text-white font-mono font-bold'>{day}</div>
				<img
					src={`/icons/${icon}.png`}
					alt={summmary}
				/>
				<div className='text-white font-mono font-bold'>
					{temperature_max}°F
				</div>
				<div className='text-white font-mono font-bold'>
					{temperature_min}°F
				</div>
			</div>
		</>
	);
};

export default DailyForecast;
