"use client";
import React from "react";
import FeedCard from "./feedcard";
import { useGetAllThreads } from "@/hooks/thread";
import { Thread } from "@/gql/graphql";

export default function Thread() {
	const { threads = [] } = useGetAllThreads();

	return (
		<div>
			{threads?.map((thread: any) =>
				thread ? (
					<FeedCard key={thread.id} data={thread as Thread} />
				) : null
			)}
		</div>
	);
}
