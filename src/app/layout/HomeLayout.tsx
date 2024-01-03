"use client";
import { BiPlus } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import { SlNote } from "react-icons/sl";

import { useState } from "react";
import Navbar from "../components/header/Navbar";
import Button from "../components/shared/Button";

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
				<Button
					className="text-sm bg-slate-200 rounded py-2 px-4"
					icon={<SlNote color="blue" />}
					color="blue"
					name="Note"
				/>
			</li>
			<li>
				<Button
					className="text-sm bg-slate-200 rounded py-2 px-4"
					icon={<MdOutlineLocalShipping color="blue" />}
					color="blue"
					name="Shipping"
				/>
			</li>
			<li>
				<Button
					className="text-sm bg-slate-200 rounded py-2 px-4"
					icon={<PiClockClockwise color="blue" />}
					color="blue"
					name="Hold Orders"
				/>
			</li>
			<li>
				<Button
					className="text-sm bg-slate-200 rounded py-2 px-4"
					icon={<BiPlus color="blue" />}
					color="blue"
					name="New Item"
				/>
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
