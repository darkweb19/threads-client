import FeedCard from "@/components/feedcard";
import NavBar from "@/components/navbar";
import HeadingPost from "@/components/headingPost";

export default function Home() {
	return (
		<div className="h-screen relative w-screen ">
			{/* nav bar  */}
			<NavBar />
			{/* threads feeeds   */}
			<div className="h-full mt-20  ">
				<div className="grid h-full w-full grid-cols-7">
					<div className="col-span-2 "></div>
					<div className="col-span-3 px-5">
						<HeadingPost />
						{/* threads post  */}
						<div>
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
							<FeedCard />
						</div>
					</div>
					<div className="col-span-2"></div>
				</div>
			</div>
		</div>
	);
}
