import React from "react";
import Image from "next/image";
import { Thread } from "@/gql/graphql";
import Link from "next/link";

interface UserFeedProps {
	data: Thread;
}

const UserFeed: React.FC<UserFeedProps> = ({ data }) => {
	return (
		<div className="mt-3 flex items-center  h-fit">
			<div className="flex px-1 py-1  items-center w-full">
				{data.author?.profileImageUrl && (
					<Image
						className="rounded-full"
						src={data.author?.profileImageUrl}
						alt="Image"
						height={40}
						width={50}
					/>
				)}
				<div className="border-b border-slate-600 flex justify-between w-full p-3 items-center">
					<div className="flex gap-1 flex-col">
						{data.author?.id && (
							<Link href={`/${data.author?.id}`}>
								{data.author?.firstName} {data.author?.lastName}
							</Link>
						)}
						<span className="text-gray-200 text-sm">
							100m followers
						</span>
					</div>
					<div className="border border-gray-300 w-fit p-2 text-slate-300 rounded-lg">
						Follow
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserFeed;
