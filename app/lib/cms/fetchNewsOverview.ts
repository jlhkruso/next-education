// graphql queries
import { gql_newsOverview } from "@/queries/newsOverview";
// lib
import { fetchData } from "@/app/lib/cms/shared/fetchData";

export const fetchNewsOverview = async () =>
  await fetchData<NewsOverview.IPage>(gql_newsOverview);
