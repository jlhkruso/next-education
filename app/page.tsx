// lib
import { fetchFrontpage } from "@/app/lib/cms/fetchFrontpage";
// components
import { Hero } from "@/app/ui/sections/hero/hero";

export default async function Home() {
  // data
  const data = await fetchFrontpage();
  const frontpage = data?.frontpage;

  return <main>{frontpage?.hero && <Hero data={frontpage?.hero} />}</main>;
}
