// graphql queries
import { gql_frontpage } from "@/queries/frontpage";
// lib
import { fetchData } from "@/app/lib/cms/fetchData";
// components
import { Hero } from "@/app/ui/sections/hero/hero";

export default async function Home() {
  const data = await fetchData<Frontpage.IPage>(gql_frontpage);

  const frontpage = data?.frontpage as Frontpage.IData;

  return <main>{frontpage?.hero && <Hero data={frontpage?.hero} />}</main>;
}
