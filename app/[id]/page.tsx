"use client";
import NavBar from "@/components/navbar";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import FeedCard from "@/components/feedcard";
import { Thread } from "@/gql/graphql";

export default function page() {
	const { user } = useCurrentUser();

	const savedUser = JSON.parse(
		window.localStorage.getItem("savedUser") as string
	);

	return (
		<div className="h-screen relative w-screen ">
			<NavBar />
			<div className="h-full mt-20 ">
				<div className="grid h-screen w-full grid-cols-7">
					<div className="col-span-2 "></div>
					<div className=" mt-4 col-span-3 px-5">
						<div>
							<div className="flex items-center justify-between mt-2 ">
								<div className="h-fit px-2">
									<span className="text-2xl font-semibold">
										{savedUser?.firstName}{" "}
										{savedUser?.lastName}
									</span>
								</div>
								<div>
									{savedUser?.profileImageUrl && (
										<Image
											src={savedUser.profileImageUrl}
											className="rounded-full"
											alt="profile image"
											width={70}
											height={70}
										/>
									)}
								</div>
							</div>
							<div className="p-3 items-center w-fit text-gray-200 text-sm">
								<p>𝑹𝒂𝒃𝒃𝒊𝒕~WooFoo</p>
								<span>"you and i know its meant to be..."</span>
							</div>
							<div className="flex items-center justify-between h-fit mt-3 text-sm  px-3 py-1">
								<p className="text-gray-400 hover:underline">
									100M followers .{" "}
									<Link href={"s"}>sujanstha.com</Link>
								</p>

								<span className="text-2xl font-bold">
									<BsInstagram />
								</span>
							</div>
						</div>
						<div className="mt-5">
							<div className="flex border-b  border-gray-600 h-10 items-center justify-evenly gap-2">
								<div className="border-b border-gray-200 h-full w-fit">
									Threads
								</div>
								<div className="h-full">Replies</div>
								<div className="h-full">Repost</div>
							</div>
							<div>
								{user?.getCurrentUser?.threads?.map((thread) =>
									thread ? (
										<FeedCard
											key={thread.id}
											data={thread as Thread}
										/>
									) : null
								)}
							</div>
						</div>
					</div>
					<div className="col-span-2"></div>
				</div>
			</div>
		</div>
	);
}
