import React, { useEffect } from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { TotalItems } from "./features/cartSlice";

const App = () => {
	const { amount, cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(TotalItems());
	}, [cartItems]);
	return (
		<>
			<div className='text-center flex  justify-evenly text-3xl font-bold bg-slate-500 mt-3 py-4 '>
				<h1>Redux Store</h1>
				<i className='fa-solid fa-cart-shopping text-2xl'>
					<span className='bg-red-500 px-2 py-1 text-sm align-top rounded-full'>
						{amount}
					</span>
				</i>
			</div>
			<Home />
		</>
	);
};

export default App;
