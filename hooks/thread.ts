import { graphqlClient } from "@/clients/api";
import { getAllThreadsQuery } from "@/graphql/query/thread";
import { useQuery } from "@tanstack/react-query";

export const useGetAllThreads = () => {
	const query = useQuery({
		queryKey: ["all-tweets"],
		queryFn: () => graphqlClient.request(getAllThreadsQuery),
	});
	return { ...query, threads: query.data?.getAllThreads };
};
