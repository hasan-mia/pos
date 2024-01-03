import { ProductItem } from "@/app/page";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
	product: ProductItem;
	addToCart: (product: ProductItem) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
	return (
		<button
			type="button"
			className="flex flex-col items-center border rounded"
			onClick={() => addToCart(product)}
		>
			<div className="w-full h-36 flex items-center justify-center">
				<Image
					src={`${product?.image} || https://i.imgur.com/WDXKO9A.jpg`}
					width={100}
					height={100}
					alt="Picture of the author"
					className="bg-white"
				/>
			</div>

			<p className="text-md bg-gray-100 w-full text-center font-semibold text-gray-500 my-1 border-b">
				${product?.price}
			</p>
			<h2 className="text-sm bg-gray-50 w-full text-center p-1">
				{product?.title}
			</h2>
		</button>
	);
};

export default ProductCard;
