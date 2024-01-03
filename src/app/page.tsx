import { BiPlusCircle, BiUserCircle } from "react-icons/bi";
import CartItem from "./components/home/CartItem";
import Products from "./components/home/Products";

export default function Home() {
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
				<CartItem />
			</div>

			{/* Product */}
			<div>
				<Products />
			</div>
		</div>
	);
}
