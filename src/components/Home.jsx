import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { clearCart } from "../features/cartSlice";
const Home = () => {
	const dispatch = useDispatch();
	const { cartItems, total, amount } = useSelector((store) => store.cart);

	if (amount < 1) {
		return (
			<section className='h-screen flex justify-center items-center'>
				<h2 className='text-5xl uppercase font-bold'>Your cart is empty</h2>
			</section>
		);
	} else {
		return (
			<>
				<div className='w-full h-full flex flex-col justify-center items-center '>
					<div className='w-full h-full m-10'>
						{cartItems.map((item) => (
							<Card
								key={item.id}
								{...item}
							/>
						))}
					</div>
					<div className='w-full h-40 border-t-2 border-black'>
						<div className='w-full h-20 flex justify-around items-center'>
							<h1>Total Amount</h1>
							<h1> ${total}</h1>
						</div>
						<div className='w-full h-10  flex justify-center items-center'>
							<button
								onClick={() => dispatch(clearCart())}
								className=' hover:cursor-pointer px-12 py-4 rounded-lg active:text-white text-red-500 border border-red-500 active:bg-red-600 uppercase font-mono'>
								Clear All
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default Home;
