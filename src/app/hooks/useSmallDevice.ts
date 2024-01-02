"use client";

import { useEffect, useState } from "react";

export default function useSmallDevice() {
	const [small, setSmall] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setSmall(window.innerWidth < 900);
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { small };
}
