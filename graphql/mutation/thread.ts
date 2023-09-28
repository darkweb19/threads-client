import { graphql } from "@/gql";

export const createThreadMutation = graphql(`
	#graphql
	mutation CreateThread($payload: CreateThreadData!) {
		createThread(payload: $payload) {
			id
		}
	}
`);
