"use client";
import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import toast from "react-hot-toast";

export default function Logout() {
	const queryClient = useQueryClient();

	const handleLogout = useCallback(async () => {
		window.localStorage.removeItem("google_token");
		toast.success("Logout success");
		// this will change the state  to the current user state
		await queryClient.invalidateQueries(["current-user"]);
	}, [queryClient]);

	return (
		<button
			onClick={handleLogout}
			className="border border-gray-500 flex text-gray-500 h-fit rounded-lg items-center w-fit  px-3 py-1"
		>
			Logout
		</button>
	);
}
