import { graphqlClient } from "@/clients/api";
import { CreateThreadData } from "@/gql/graphql";
import { createThreadMutation } from "@/graphql/mutation/thread";
import { getAllThreadsQuery } from "@/graphql/query/thread";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateThread = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (payload: CreateThreadData) =>
			graphqlClient.request(createThreadMutation, { payload }),
		onMutate: () => toast.loading("Creating Tweet", { id: "1" }),
		onSuccess: async () => {
			await queryClient.invalidateQueries(["all-threads"]);
			toast.success("Thread Created", { id: "1" });
		},
	});

	return mutation;
};

export const useGetAllThreads = () => {
	const query = useQuery({
		queryKey: ["all-threads"],
		queryFn: () => graphqlClient.request(getAllThreadsQuery),
	});
	return { ...query, threads: query.data?.getAllThreads };
};
