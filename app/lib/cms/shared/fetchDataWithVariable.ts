import { client } from "@/app/lib/graphqlClient";
export const fetchDataWithVariable = async <T>(query: string, slug: string) => {
  const variables = { slug: slug };
  try {
    const data = await client.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
