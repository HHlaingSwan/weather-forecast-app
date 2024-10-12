import React from "react";

import DailyForecast from "./DailyForecast";

const Forecast = ({ title, data }) => {
	return (
		<>
			<div>
				<h3 className='text-white text-2xl font-mono font-bold text-center my-8'>
					{title}
				</h3>
				<div className='flex flex-wrap items-center justify-center gap-4 px-24'>
					{data.map((singleData, index) => (
						<DailyForecast
							singleData={singleData}
							key={index}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Forecast;
