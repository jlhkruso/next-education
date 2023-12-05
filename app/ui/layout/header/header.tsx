import HeaderLink from "./headerLink";
import { fetchNavigation } from "@/app/lib/cms/fetchNavigation";

export default async function Header() {
  const data = await fetchNavigation();
  return (
    <header>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>
            <HeaderLink data={item} />
          </li>
        ))}
      </ul>
    </header>
  );
}
