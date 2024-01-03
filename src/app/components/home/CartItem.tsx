"use client";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { PiMinusCircle, PiPlusCircle } from "react-icons/pi";

const CartItem: React.FC = () => {
	const [count, setCount] = useState(0);
	const inCrement = () => {
		if (count >= 0) {
			setCount(count + 1);
		}
	};
	const deCrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<>
			{/* <div className="flex justify-center items-center my-2 border-b">
				<div className="w-1/12 border-l ps-1 border-t">Edit</div>
				<div className="w-3/12 border-l ps-1 border-t">Title</div>
				<div className="w-2/12 border-l ps-1 border-t">Price</div>
				<div className="w-3/12 border-l ps-1 border-t">Counter</div>
				<div className="w-2/12 border-l ps-1 border-t">Total</div>
				<div className="w-1/12 border-l border-r px-1 border-t">Delete</div>
			</div> */}
			<div className="flex justify-center items-center my-2">
				<div className="w-1/12">
					<button type="button">
						<BiEdit size={18} />
					</button>
				</div>
				<div className="w-10/12">
					<div className="flex border p-1">
						<div className="w-4/12">Title</div>
						<div className="w-2/12">Price</div>
						<div className="w-4/12">
							<div className="flex justify-center gap-1">
								<button onClick={inCrement} className="text-md">
									<PiPlusCircle />
								</button>
								<span className="px-2 text-lg">{count}</span>
								<button onClick={deCrement} className="text-md">
									<PiMinusCircle />
								</button>
							</div>
						</div>
						<div className="w-2/12">Total</div>
					</div>
				</div>
				<div className="w-1/12 px-1 flex justify-center">
					<button type="button">
						<BiTrash color="red" size={18} />
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
