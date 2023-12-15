import { client } from "@/app/lib/graphqlClient";
export const fetchData = async <T>(query: string) => {
  try {
    const data = await client.request<T>(query);
    return data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
