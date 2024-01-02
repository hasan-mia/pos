import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import HomeLayout from "./layout/HomeLayout";
import { Providers } from "./store/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pos App",
	description: "Pos App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<html lang="en" data-theme="light">
				<body className={`${inter.className} max-h-screen`}>
					{/* Layout */}
					<HomeLayout children={children} />

					<ToastContainer
						position="top-left"
						autoClose={1000}
						hideProgressBar
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Zoom}
					/>
				</body>
			</html>
		</Providers>
	);
}
