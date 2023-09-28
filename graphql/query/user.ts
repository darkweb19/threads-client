import { graphql } from "@/gql";

export const verifyUserGoogleTokenQuery = graphql(`
	#graphql
	query VerifyUserGoogleToken($token: String!) {
		verifyGoogleToken(token: $token)
	}
`);

export const getCurrentUserQuery = graphql(`
	#graphql
	query getCurrentUser {
		getCurrentUser {
			id
			email
			firstName
			lastName
			profileImageUrl
			threads {
				content
				id
				author {
					id
					firstName
					lastName
					profileImageUrl
				}
			}
		}
	}
`);
