"use client";
import { HomeIndexProps, ProductItem } from "@/app/page";
import React, { useState } from "react";
import { BiPlusCircle, BiUserCircle } from "react-icons/bi";
import Carts from "./Carts";
import Products from "./Products";

export interface CartListItem extends ProductItem {
	quantity: number;
}

const HomeIndex: React.FC<HomeIndexProps> = ({ Categories, ProductList }) => {
	const [cartList, setCartList] = useState<CartListItem[]>([]);
	// Add to Cart handler
	const addToCart = (product: ProductItem) => {
		const existingProduct = cartList.find((item) => item.id === product.id);

		if (existingProduct) {
			setCartList((prev) =>
				prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			);
		} else {
			setCartList((prev) => [...prev, { ...product, quantity: 1 }]);
		}
	};
	// Increment handler
	const inCrement = (productId: number) => {
		setCartList((prev) =>
			prev.map((item) =>
				item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
			),
		);
	};

	// Decrement handler
	const deCrement = (productId: number) => {
		setCartList((prev) =>
			prev.map((item) =>
				item.id === productId && item.quantity > 0
					? { ...item, quantity: item.quantity - 1 }
					: item,
			),
		);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-2  mt-2">
			{/* Cart */}
			<div>
				<div className="flex items-center justify-between bg-gray-100 p-2 rounded text-blue-500">
					<div className="flex items-center gap-2">
						<BiUserCircle size={24} />
						Steve Jobs
					</div>
					<div>
						<BiPlusCircle size={24} />
					</div>
				</div>
				<Carts
					cartList={cartList}
					inCrement={inCrement}
					deCrement={deCrement}
				/>
			</div>

			{/* Product */}
			<div>
				<Products
					ProductList={ProductList}
					Categories={Categories}
					addToCart={addToCart}
				/>
			</div>
		</div>
	);
};

export default HomeIndex;
