"use client";
import { FaThreads } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useCallback } from "react";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import Logout from "./logout";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
	const { user } = useCurrentUser();

	const queryClient = useQueryClient();
	//hadnle google login
	const handleGoogleLogin = useCallback(
		async (cred: CredentialResponse) => {
			const googleToken = cred.credential;
			if (!googleToken) return toast.error("Google token not found");
			const { verifyGoogleToken } = await graphqlClient.request(
				verifyUserGoogleTokenQuery,
				{
					token: googleToken,
				}
			);
			toast.success("verify successs");

			if (verifyGoogleToken) {
				window.localStorage.setItem("google_token", verifyGoogleToken);
			}

			//! this will change the state  to the current user state
			await queryClient.invalidateQueries(["current-user"]);
		},
		[queryClient]
	);

	return (
		<div className="h-20 fixed top-0 bottom-0 left-0 backdrop-blur-xl">
			<div className="grid ml-6 grid-cols-7">
				<div className="col-span-2 flex justify-center items-center mt-4">
					<div className="text-3xl  cursor-pointer">
						<FaThreads />
					</div>
				</div>
				<div className="col-span-3 px-10 ">
					<ul className="flex items-center gap-2 mt-2 cursor-pointer justify-center">
						<Link href="/">
							<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
								<GoHome />
							</li>
						</Link>
						<Link href="/search">
							<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
								<span>
									<FiSearch />
								</span>
							</li>
						</Link>
						<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
							<span>
								<svg
									aria-label="Create"
									className="x1lliihq x1n2onr6"
									color="rgb(77, 77, 77)"
									fill="transparent"
									height="26"
									role="img"
									viewBox="0 0 26 26"
									width="26"
								>
									<path
										d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"
										stroke="currentColor"
										strokeLinecap="round"
										strokeWidth="2.5"
									></path>
									<path
										d="M21.75 4.25L13.75 12.25"
										stroke="currentColor"
										strokeLinecap="round"
										strokeWidth="2.5"
									></path>
								</svg>
							</span>
						</li>

						<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
							<span>
								<AiOutlineHeart />
							</span>
						</li>

						<Link href={`/${user?.getCurrentUser?.id}`}>
							<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
								<BiUser />
							</li>
						</Link>
					</ul>
				</div>
				<div className="col-span-2 flex gap-2 justify-center items-center mt-3">
					<div className="text-3xl text-gray-600 cursor-pointer">
						<HiMiniBars3BottomRight />
					</div>
					<div>
						{user?.getCurrentUser?.profileImageUrl ? (
							<Image
								className="px-2 py-2 rounded-full"
								src={user?.getCurrentUser?.profileImageUrl}
								alt="user image"
								width={60}
								height={60}
							/>
						) : null}
					</div>
					<div className=" p-1 cursor-pointer items-center">
						{/* if user is present then login button will be displayed
						else logout button is displayed */}
						{user?.getCurrentUser == null ? (
							<GoogleLogin
								shape="circle"
								size="large"
								text="signin"
								onSuccess={handleGoogleLogin}
							/>
						) : (
							<Logout />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
