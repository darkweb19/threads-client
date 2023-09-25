"use client";
import Image from "next/image";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { TbLocationShare } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { useCurrentUser } from "@/hooks/user";

export default function FeedCard() {
	const { user } = useCurrentUser();
	console.log(user?.getCurrentUser);
	return (
		<div className="border-b border-gray-700 p-3 h-fit">
			<div className="flex items-center gap-2">
				<Image
					src={"https://avatars.githubusercontent.com/u/61812195?v=4"}
					className="rounded-full"
					alt="profile image"
					width={40}
					height={40}
				/>
				<p className="font-semibold text-md">sujan shrestha</p>
				<MdVerified className="text-blue-700" />
			</div>
			<div className="border-l text-gray-200 border-gray-500 p-3 mt-2 w-3/4 ml-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quisquam similique at vero ipsam illo id, sint sunt sed expedita
				error magnam nisi, esse mollitia porro numquam cupiditate
				tenetur vel modi. Lorem ipsum dolor sit amet consectetur
				adipisicing elit.
			</div>
			<div className=" h-9 w-44 ml-4 mt-3 ">
				<div className="flex  text-2xl justify-evenly cursor-pointer items-center">
					<AiOutlineHeart />
					<FaRegComment />
					<FaRetweet />
					<TbLocationShare />
				</div>
			</div>
			<div className="text-base ml-8 flex gap-1 text-slate-500">
				<p className="hover:underline decoration-solid">4 replies </p> .{" "}
				<p className="hover:underline decoration-solid"> 1.4k likes</p>
			</div>
		</div>
	);
}
