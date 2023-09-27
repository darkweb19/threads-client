import Image from "next/image";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { TbLocationShare } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { Thread } from "@/gql/graphql";
interface FeedCardProps {
	data: Thread;
}

const FeedCard: React.FC<FeedCardProps> = ({ data }) => {
	return (
		<div className="border-b border-gray-700 p-3 h-fit">
			<div className="flex items-center gap-2">
				{data.author?.profileImageUrl && (
					<Image
						src={data.author?.profileImageUrl}
						className="rounded-full"
						alt="profile image"
						width={40}
						height={40}
					/>
				)}
				<p className="font-semibold text-md">
					{data.author?.firstName} {data.author?.lastName}
				</p>
				<MdVerified className="text-blue-700" />
			</div>
			<div className="border-l text-gray-200 border-gray-500 p-3 mt-2 w-3/4 ml-5">
				{data.content}.
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
};
export default FeedCard;
