import React from "react";
import Button from "../shared/Button";
import ProducctCard from "./ProducctCard";

const Products: React.FC = () => {
	const CatItems = [
		{
			title: "All Categories",
			link: "/",
		},
		{
			title: "Electronics",
			link: "/",
		},
		{
			title: "Home & Lifecycle",
			link: "/",
		},
		{
			title: "Men Fasion",
			link: "/",
		},
		{
			title: "Women Fasions",
			link: "/",
		},
	];

	const ProductItems = [
		{
			id: 1,
			title: "Panjabee",
			image: "https://i.imgur.com/WDXKO9A.jpg",
			price: 40,
			link: "/",
		},
		{
			id: 2,
			title: "Panjabee Black",
			image: "https://i.imgur.com/V0DqXjm.jpg",
			price: 60,
			link: "/",
		},
		{
			id: 3,
			title: "Panjabee white",
			image: "https://i.imgur.com/2HXHTc7.jpg",
			price: 50,
			link: "/",
		},
		{
			id: 4,
			title: "T-shirt",
			image: "https://i.imgur.com/sQ0ADtH.jpg",
			price: 70,
			link: "/",
		},
		{
			id: 5,
			title: "Kurti",
			image: "https://i.imgur.com/V7K3skh.png",
			price: 80,
			link: "/",
		},
		{
			id: 6,
			title: "Jacket",
			image: "https://i.imgur.com/GHG1Yzk.png",
			price: 90,
			link: "/",
		},
		{
			id: 7,
			title: "Jacket Red",
			image: "https://i.imgur.com/meweJJU.png",
			price: 85,
			link: "/",
		},
		{
			id: 8,
			title: "Panjabee",
			image: "https://i.imgur.com/WDXKO9A.jpg",
			price: 95,
			link: "/",
		},
		{
			id: 9,
			title: "Panjabee Black",
			image: "https://i.imgur.com/V0DqXjm.jpg",
			price: 65,
			link: "/",
		},
		{
			id: 10,
			title: "Panjabee white",
			image: "https://i.imgur.com/2HXHTc7.jpg",
			price: 55,
			link: "/",
		},
	];
	return (
		<div>
			{/* Category Menu */}
			<div className="flex flex-row overflow-auto items-center gap-2">
				{CatItems?.map((item) => (
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
					{ProductItems?.map((product) => (
						<ProducctCard product={product} key={Math.random()} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
