import { client } from "@/app/lib/graphqlClient";
export const fetchDataPagination = async <T>(query: string, skip: number) => {
  const variables = { skip: skip };
  try {
    const data = await client.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
