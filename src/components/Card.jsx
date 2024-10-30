import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../features/cartSlice";

const Card = ({ id, title, price, image, amount }) => {
	const dispatch = useDispatch();
	return (
		<>
			<div className='w-full h-36 bg-slate-200 my-1 py-1 px-4 flex justify-around items-center'>
				<div className='w-32  h-full'>
					<img
						className='w-full h-full object-cover '
						src={image}
						alt={id}
					/>
				</div>
				<div className='w-36 h-full  flex flex-col gap-3 justify-center items-center'>
					<p className='text-sm'>{title}</p>
					<div className='text-base'>${price}</div>
					<button
						onClick={() => {
							dispatch(removeItem(id));
						}}
						className='text-blue-500 hover:cursor-pointer'>
						Remove
					</button>
				</div>
				<div className=' h-full w-14  flex flex-col justify-center items-center '>
					<i
						onClick={() => {
							console.log(dispatch(increase({ id })));
						}}
						className='fa-solid fa-chevron-up p-3 hover:cursor-pointer'></i>
					<span className='my-2'>{amount}</span>
					<i
						onClick={() => {
							if (amount === 0) {
								alert("You Reached at Minimum Limit");
								return;
							} else dispatch(decrease({ id }));
						}}
						className='fa-solid fa-chevron-down p-3 hover:cursor-pointer'></i>
				</div>
			</div>
		</>
	);
};

export default Card;
