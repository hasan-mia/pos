"use client";
import { LuLogOut } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";

interface NavbarProps {
	navItemList: any;
	toggleFullScreen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItemList, toggleFullScreen }) => {
	return (
		<header className="px-2">
			<div className="navbar bg-base-100 border-b shadow-sm">
				<div className="navbar-start">
					<label
						htmlFor="mobile-drawer"
						className="drawer-button border p-1 rounded"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>

					<div className="hidden lg:flex ps-2">
						<ul className="menu menu-horizontal px-1 gap-2">{navItemList()}</ul>
					</div>
				</div>

				{/* Right side navbar */}
				<div className="navbar-end">
					<div className="form-control pe-2">
						<input
							type="text"
							placeholder="Search"
							className="input rounded w-full input-sm md:w-auto"
						/>
					</div>
					<div className="flex gap-2">
						<button
							className="flex gap-1 text-xl items-center bg-gray-500 rounded p-1"
							onClick={toggleFullScreen}
						>
							<MdFullscreen color="white" />
						</button>
						<button className="flex gap-1 text-sm items-center bg-gray-500 rounded py-1 px-2">
							<LuLogOut color="white" />
							<span className="text-white">Logout</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
