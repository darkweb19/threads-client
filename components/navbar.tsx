"use client";
import { FaThreads } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GoogleLogin } from "@react-oauth/google";

export default function NavBar() {
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
						<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
							<span>
								<GoHome />
							</span>
						</li>
						<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
							<span>
								<FiSearch />
							</span>
						</li>
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
						<li className="text-3xl px-8 py-4 rounded-lg hover:bg-gray-900 text-slate-600">
							<span>
								<BiUser />
							</span>
						</li>
					</ul>
				</div>
				<div className="col-span-2 flex gap-2 justify-center items-center mt-3">
					<div className="text-3xl text-gray-600 cursor-pointer">
						<HiMiniBars3BottomRight />
					</div>
					<div className=" m-2 p-2 cursor-pointer items-center">
						<GoogleLogin
							shape="circle"
							size="large"
							text="signin"
							onSuccess={(cred) => console.log(cred)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
