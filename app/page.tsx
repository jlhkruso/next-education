import { gql_frontpage } from "@/queries/frontpage";
import { fetchData } from "@/app/lib/cms/fetchData";

export default async function Home() {
  const data = await fetchData(gql_frontpage);
  console.log("data", data);

  return (
    <main>
      <h1>
        {data?.frontpage?.hero?.heroTitle && data?.frontpage?.hero?.heroTitle}
      </h1>
      <div>frontpage</div>
    </main>
  );
}
