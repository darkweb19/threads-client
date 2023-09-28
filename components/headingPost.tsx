"use client";
import { useCreateThread } from "@/hooks/thread";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
export default function HeadingPost() {
	const { user } = useCurrentUser();
	const { mutate } = useCreateThread();
	const [content, setContent] = useState("");
	const handleCreateThread = useCallback(() => {
		mutate({
			content,
		});
		setContent("");
	}, [mutate, content, setContent]);

	return (
		<div className="flex flex-row w-full gap-2 border-b border-gray-800 px-2 py-4 items-center justify-between">
			<div className="flex gap-3 items-center text-gray-500">
				{user?.getCurrentUser?.profileImageUrl && (
					<Image
						src={user?.getCurrentUser?.profileImageUrl}
						className="rounded-full"
						alt="profile image"
						width={40}
						height={40}
					/>
				)}

				<textarea
					cols={30}
					rows={3}
					placeholder="Start a thread..."
					onChange={(e) => setContent(e.target.value)}
					value={content}
					className="text-sm text-gray-400 bg-transparent border-none outline-none "
				/>
			</div>
			{/* post button and handled creating tweet */}
			{content == "" ? (
				<button
					type="button"
					onClick={() =>
						toast.error("Content is empty", { duration: 1500 })
					}
					className="border   border-gray-300 flex text-gray-500 h-fit rounded-lg items-center w-fit  px-3 py-1 "
				>
					Post
				</button>
			) : (
				<button
					onClick={handleCreateThread}
					className="border  border-gray-300 flex text-gray-500 h-fit rounded-lg items-center w-fit  px-3 py-1 "
				>
					Post
				</button>
			)}
		</div>
	);
}
