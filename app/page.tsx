import { fetchFrontpage } from "@/app/lib/cms/fetchFrontpage";

export default async function Home() {
  const data = await fetchFrontpage();
  console.log("data", data);
  return (
    <main>
      <div>frontpage</div>
    </main>
  );
}
