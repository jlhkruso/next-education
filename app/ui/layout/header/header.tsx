import HeaderLink from "./headerLink";

async function getData(): Promise<any> {
  try {
    const res = await fetch(
      "https://656de3a9bcc5618d3c2429ff.mockapi.io/navigation",
    );
    return res.json();
  } catch (error: any) {
    // Serialize the error into a plain object
    return { error: { message: error.message } };
  }
}
export default async function Header() {
  const data = await getData();
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
