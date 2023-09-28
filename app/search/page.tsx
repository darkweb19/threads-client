"use client";
import UserFeed from "@/components/UserFeed";
import NavBar from "@/components/navbar";
import { Thread } from "@/gql/graphql";
import { useGetAllThreads } from "@/hooks/thread";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function page() {
	const { threads } = useGetAllThreads();
	return (
		<div className="h-screen relative w-screen ">
			<NavBar />
			<div className="h-full mt-20 ">
				<div className="grid h-screen w-full grid-cols-7">
					<div className="col-span-2 "></div>
					<div className=" mt-4 col-span-3 px-5">
						{/* search bar  */}
						<div className="flex  gap-2 border border-slate-600 rounded-2xl items-center p-3">
							<span className="text-xl p-1 text-slate-600">
								<BiSearch />
							</span>
							<input
								className="w-full h-10 bg-transparent outline-none text-gray-300 "
								name="searchbar"
								id=""
								placeholder="Search"
							/>
						</div>
						{/* users feed  */}

						{threads?.map(
							(user) =>
								user?.author?.id == user?.author?.id && (
									<UserFeed
										key={user?.id}
										data={user as Thread}
									/>
								)
						)}
					</div>
					<div className="col-span-2"></div>
				</div>
			</div>
		</div>
	);
}
