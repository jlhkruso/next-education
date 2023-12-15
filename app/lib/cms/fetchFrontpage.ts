// graphql queries
import { gql_frontpage } from "@/queries/frontpage";
// lib
import { fetchData } from "@/app/lib/cms/shared/fetchData";

export const fetchFrontpage = async () =>
  await fetchData<Frontpage.IPage>(gql_frontpage);
