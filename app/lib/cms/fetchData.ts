import { client } from "@/app/lib/graphqlClient";
export const fetchData = async (query: string) => {
  try {
    const data = await client.request(query);
    return data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
