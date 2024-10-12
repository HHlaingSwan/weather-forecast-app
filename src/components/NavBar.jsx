import React, { useContext, useState } from "react";
import WeatherContext from "../context/weather.context";

const NavBar = () => {
	const { location, setLocation } = useContext(WeatherContext);
	const [text, setText] = useState("");

	const searchFn = (e) => {
		setText(e.target.value);
	};
	const searchPlace = () => {
		setLocation({ ...location, name: text });
		setText("");
	};

	return (
		<>
			<nav className='flex sticky top-0 left-0  z-50 w-full justify-between items-center px-12 py-4 mb-4 bg-slate-900'>
				<div className='flex items-center gap-4 hover:cursor-pointer'>
					<i className='fa-solid fa-cloud-sun-rain text-white text-2xl hover:text-gray-400'></i>
					<h1 className='text-white text-2xl font-bold hover:text-gray-400'>
						{location.name}
					</h1>
				</div>
				<div className='flex items-center justify-between px-4 w-1/4 bg-gray-700 rounded-lg hover:scale-105 transition-all duration-300'>
					<input
						type='text'
						value={text}
						onChange={searchFn}
						placeholder='Search'
						className='p-2 rounded-md text-white bg-transparent focus:outline-none placeholder:text-gray-400  hover:text-gray-300'
					/>
					<i
						onClick={searchPlace}
						className='fa-solid fa-magnifying-glass text-white text-2xl hover:text-gray-300  hover:cursor-pointer'></i>
				</div>
				<div className='flex items-center gap-4 hover:cursor-pointer'>
					<i className='fa-solid fa-gear text-white text-2xl hover:text-gray-400 hover:rotate-180 transition-all duration-300'></i>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
