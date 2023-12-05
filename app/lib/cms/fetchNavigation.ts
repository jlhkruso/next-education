import { fetchData } from "@/app/lib/shared/fetchData";
export const fetchNavigation = async () => {
  return await fetchData(
    "https://656de3a9bcc5618d3c2429ff.mockapi.io/navigation",
  );
};
