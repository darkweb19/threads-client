import { graphql } from "../../gql";

export const getAllThreadsQuery = graphql(`
	#graphql
	query GetAllThreads {
		getAllThreads {
			id
			content
			author {
				firstName
				lastName
				profileImageUrl
				email
			}
		}
	}
`);
