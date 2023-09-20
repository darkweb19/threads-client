import Image from "next/image";
export default function HeadingPost() {
	return (
		<div className="flex flex-row w-full gap-2 border-b border-gray-800 px-2 py-4 items-center justify-between">
			<div className="flex gap-3 items-center text-gray-500">
				<Image
					src={"https://avatars.githubusercontent.com/u/61812195?v=4"}
					className="rounded-full"
					alt="profile image"
					width={40}
					height={40}
				/>
				<input
					type="text"
					placeholder="Start a thread..."
					className="h-9 text-sm text-gray-500 bg-transparent border-none outline-none"
				/>
			</div>

			<div className="border cursor-not-allowed border-gray-500 flex text-gray-500 h-fit rounded-lg items-center w-fit  px-3 py-1 ">
				Post
			</div>
		</div>
	);
}
