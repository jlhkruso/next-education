export default async function GetData() {
  try {
    const res = await fetch(
      "https://656de3a9bcc5618d3c2429ff.mockapi.io/navigation",
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    return res.json();
  } catch (error: any) {
    // Serialize the error into a plain object
    return { error: { message: error.message } };
  }
}
