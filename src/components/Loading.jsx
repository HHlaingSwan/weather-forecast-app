import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Triangle
				visible={true}
				height='200'
				width='200'
				color='#3FB8AF'
				ariaLabel='triangle-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	);
};

export default Loading;
