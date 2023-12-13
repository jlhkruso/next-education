import { GraphQLClient } from "graphql-request";

// env variables
const graphQlUrl = process.env.GRAPHQL_API_URL as string;
const graphQlToken = process.env.GRAPHQL_TOKEN as string;

// headers for graphql-request
const headers: GraphQl.IHeader = {
  "content-type": "application/json",
  Authorization: `Bearer ${graphQlToken}`,
};

// @ts-expect-error: The library type definitions are not up to date
export const client = new GraphQLClient(graphQlUrl, headers);
