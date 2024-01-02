// graphql queries
import { gql_news } from "@/queries/news";
// lib
import { fetchDataWithVariable } from "@/app/lib/cms/shared/fetchDataWithVariable";

export const fetchNews = async (slug: string) =>
  await fetchDataWithVariable<News.IPage>(gql_news, slug);
