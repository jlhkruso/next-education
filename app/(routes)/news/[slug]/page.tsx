// lib
import { fetchNews } from "@/app/lib/cms/fetchNews";
// components
import { Hero } from "@/app/ui/sections/hero/hero";

export default async function Page({ params }: { params: { slug: string } }) {
  // data
  const data = await fetchNews(params.slug);
  const newsPage = data?.newsPage;
  return <main>{newsPage?.hero && <Hero data={newsPage?.hero} />}</main>;
}
