import NavBar from "@/components/navbar";
import HeadingPost from "@/components/headingPost";
import Thread from "@/components/Thread";

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
						<Thread />
					</div>
					<div className="col-span-2"></div>
				</div>
			</div>
		</div>
	);
}
