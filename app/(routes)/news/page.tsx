// lib
import { fetchNewsOverview } from "@/app/lib/cms/fetchNewsOverview";
// components
import { Hero } from "@/app/ui/sections/hero/hero";
import { NewsList } from "@/app/ui/sections/newsList/newsList";

export default async function Page() {
  // data
  const data = await fetchNewsOverview();
  const newsOverview = data?.newsOverview;

  return (
    <main>
      {newsOverview?.hero && <Hero data={newsOverview?.hero} />}
      {<NewsList />}
    </main>
  );
}
