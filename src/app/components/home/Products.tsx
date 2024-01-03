import { HomeIndexProps, ProductItem } from "@/app/page";
import React from "react";
import Button from "../shared/Button";
import ProductCard from "./ProductCard";

interface HomeIndexPropsWithCart extends HomeIndexProps {
	addToCart: (product: ProductItem) => void;
}

const Products: React.FC<HomeIndexPropsWithCart> = ({
	Categories,
	ProductList,
	addToCart,
}) => {
	return (
		<div>
			{/* Category Menu */}
			<div className="flex flex-row overflow-auto items-center gap-2">
				{Categories?.map((item) => (
					<Button
						key={Math.random()}
						className="text-md capitalize bg-gray-50 gap-1 py-1 px-2 rounded border border-blue-500"
						color="black"
						name={item?.title}
					/>
				))}
			</div>
			<div className="my-2">
				<div className="grid gap-2 grid-cols-2 md:grid-cols-6 lg:grid-cols-5">
					{ProductList?.map((product) => (
						<ProductCard
							product={product}
							key={Math.random()}
							addToCart={addToCart}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
