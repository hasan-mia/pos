"use client";
import { BiPlus } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import { SlNote } from "react-icons/sl";

import { useState } from "react";
import Navbar from "../components/header/Navbar";

interface Node {
	children: React.ReactNode;
}

const HomeLayout: React.FC<Node> = ({ children }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	const navItemList = () => (
		<>
			<li>
				<button className="flex gap-3 text-sm items-center bg-slate-200 rounded py-2 px-4">
					<SlNote color="blue" size={14} />
					<span className="text-blue-600">Note</span>
				</button>
			</li>
			<li>
				<button className="flex gap-3 text-sm items-center bg-slate-200 rounded py-2 px-4">
					<MdOutlineLocalShipping color="blue" size={18} />
					<span className="text-blue-600">Shipping</span>
				</button>
			</li>
			<li>
				<button className="flex gap-3 text-sm items-center bg-slate-200 rounded py-2 px-4">
					<PiClockClockwise color="blue" size={20} />
					<span className="text-blue-600">Hold Orders</span>
				</button>
			</li>
			<li>
				<button className="flex gap-3 text-sm items-center bg-slate-200 rounded py-2 px-4">
					<BiPlus color="blue" size={20} />
					<span className="text-blue-600">New Item</span>
				</button>
			</li>
		</>
	);

	return (
		<div
			style={
				isFullScreen
					? {
							width: "100vw",
							height: "100vh",
							position: "fixed",
							top: 0,
							left: 0,
					  }
					: {}
			}
		>
			<Navbar navItemList={navItemList} toggleFullScreen={toggleFullScreen} />
			<main className="drawer">
				{/* Desktop Drawer */}
				<>
					<input
						id="mobile-drawer"
						type="checkbox"
						className="drawer-toggle lg:hidden"
					/>
					<div className="drawer-content px-4">{children}</div>
					<div className="drawer-side">
						<label
							htmlFor="mobile-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu px-4 w-56 min-h-full bg-base-200 text-base-content relative gap-2">
							{navItemList()}
						</ul>
					</div>
				</>
			</main>
		</div>
	);
};

export default HomeLayout;
