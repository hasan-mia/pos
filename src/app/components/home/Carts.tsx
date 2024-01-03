"use client";
import React from "react";
import CartItem from "./CartItem";
import { CartListItem } from "./Index";

interface CartsProps {
	cartList: CartListItem[];
	inCrement: (productId: number) => void;
	deCrement: (productId: number) => void;
	deleteItem: (productId: number) => void;
}
const Carts: React.FC<CartsProps> = ({
	cartList,
	inCrement,
	deCrement,
	deleteItem,
}) => {
	// single item subtotal
	const calculateSubtotal = (item: CartListItem): number => {
		return item.price * item.quantity;
	};

	// all item subtotal from array
	const calculateTotalSubtotal = (cartList: CartListItem[]): number => {
		return cartList.reduce((total, item) => total + calculateSubtotal(item), 0);
	};

	// total Subtotal
	const totalSubtotal = calculateTotalSubtotal(cartList);

	return (
		<div>
			{cartList?.map((cart) => (
				<CartItem
					key={cart.id}
					cart={cart}
					inCrement={inCrement}
					deCrement={deCrement}
					deleteItem={deleteItem}
				/>
			))}
			<div className="flex justify-end px-4">
				<table>
					<tr className="flex border-b justify-between gap-2">
						<td>Sub Total</td>
						<td>$ {totalSubtotal}</td>
					</tr>
					<tr className="flex border-b justify-between  gap-2">
						<td>Tax</td>
						<td>$25.50 </td>
					</tr>
					<tr className="flex border-b justify-between  gap-2">
						<td>Shipping </td>
						<td> $5.50 </td>
					</tr>
					<tr className="flex border-b justify-between  gap-2">
						<td className="text-blue-500 text-sm font-semibold">
							Discount on cart{" "}
						</td>
						<td> $10.50 </td>
					</tr>
					<tr className="flex border-t-2 justify-between  gap-2">
						<td className="font-semibold">Total </td>
						<td className="font-semibold">
							$ {totalSubtotal > 0 ? totalSubtotal + 25.5 + 5.5 - 10 : 0.0}
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default Carts;
