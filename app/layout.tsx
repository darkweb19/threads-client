"use client";
import "./globals.css";

import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GoogleOAuthProvider clientId="1013886399741-ocsv3peh6c4pvvjfr34v9q141ueme8kg.apps.googleusercontent.com">
					{children}
					<Toaster />
				</GoogleOAuthProvider>
			</body>
		</html>
	);
}
