"use client";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import NavBar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryClientProvider client={queryClient}>
					<GoogleOAuthProvider clientId="1013886399741-ocsv3peh6c4pvvjfr34v9q141ueme8kg.apps.googleusercontent.com">
						<NavBar />
						{children}
						<Toaster />
						<ReactQueryDevtools />
					</GoogleOAuthProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
