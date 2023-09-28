import { graphql } from "../../gql";

export const getAllThreadsQuery = graphql(`
	#graphql
	query GetAllThreads {
		getAllThreads {
			id
			content
			author {
				id
				firstName
				lastName
				profileImageUrl
				email
			}
		}
	}
`);
