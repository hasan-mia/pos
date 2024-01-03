import HomeIndex from "./components/home/Index";

export interface ProductItem {
	id: number;
	title: string;
	image: string;
	price: number;
	link: string;
}

export interface CategoryItem {
	title: string;
	link: string;
}

export interface HomeIndexProps {
	Categories: CategoryItem[];
	ProductList: ProductItem[];
}

export default function Home() {
	const CatItems: CategoryItem[] = [
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

	const ProductItems: ProductItem[] = [
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
	return <HomeIndex Categories={CatItems} ProductList={ProductItems} />;
}
