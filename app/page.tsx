import { gql_frontpage } from "@/queries/frontpage";
import { fetchData } from "@/app/lib/cms/fetchData";

export default async function Home() {
  const data = await fetchData<Frontpage.IPage>(gql_frontpage);

  const frontpageObj = data?.frontpage as Frontpage.IData;

  console.log("data", frontpageObj);

  return (
    <main>
      <h1>{frontpageObj?.hero?.heroTitle && frontpageObj?.hero?.heroTitle}</h1>
      <p>
        {frontpageObj?.hero?.heroBodytext?.html &&
          frontpageObj?.hero?.heroBodytext?.html}
      </p>
      <div>frontpage</div>
    </main>
  );
}
