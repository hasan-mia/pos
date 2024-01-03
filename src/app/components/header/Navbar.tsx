"use client";
import { LuLogOut } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";
import Button from "../shared/Button";

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
						<Button
							className="text-sm bg-gray-500 gap-1 p-1 rounded"
							onClick={toggleFullScreen}
							icon={<MdFullscreen color="white" size={18} />}
							color="black"
						/>
						<Button
							className="text-sm bg-gray-500 gap-1 px-2 py-1 rounded"
							icon={<LuLogOut color="white" />}
							name="Logout"
							color="white"
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
