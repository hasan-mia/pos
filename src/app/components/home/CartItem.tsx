"use client";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { PiMinusCircle, PiPlusCircle } from "react-icons/pi";
import { CartListItem } from "./Index";

interface CartItemProps {
	cart: CartListItem;
	inCrement: (productId: number) => void;
	deCrement: (productId: number) => void;
	deleteItem: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
	cart,
	inCrement,
	deCrement,
	deleteItem,
}) => {
	return (
		<>
			<div className="flex justify-center items-center my-2">
				<div className="w-1/12">
					<button type="button">
						<BiEdit size={18} />
					</button>
				</div>
				<div className="w-10/12">
					<div className="flex border p-1">
						<div className="w-4/12">{cart?.title}</div>
						<div className="w-2/12">{cart?.price}</div>
						<div className="w-4/12">
							<div className="flex justify-center gap-1">
								<button onClick={() => deCrement(cart?.id)} className="text-md">
									<PiMinusCircle />
								</button>
								<span className="px-2 text-lg">{cart?.quantity}</span>
								<button onClick={() => inCrement(cart?.id)} className="text-md">
									<PiPlusCircle />
								</button>
							</div>
						</div>
						<div className="w-2/12">{cart?.quantity * cart?.price}</div>
					</div>
				</div>
				<div className="w-1/12 px-1 flex justify-center">
					<button type="button" onClick={() => deleteItem(cart.id)}>
						<BiTrash color="red" size={18} />
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
