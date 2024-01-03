"use client";
import React from "react";
import CartItem from "./CartItem";
import { CartListItem } from "./Index";

interface CartsProps {
	cartList: CartListItem[];
	inCrement: (productId: number) => void;
	deCrement: (productId: number) => void;
}
const Carts: React.FC<CartsProps> = ({ cartList, inCrement, deCrement }) => {
	return cartList?.map((cart) => (
		<CartItem
			key={cart.id}
			cart={cart}
			inCrement={inCrement}
			deCrement={deCrement}
		/>
	));
};

export default Carts;
