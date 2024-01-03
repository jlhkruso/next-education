// graphql queries
import { gql_newsList } from "@/queries/sections/newsList";
// lib
import { fetchData } from "@/app/lib/cms/shared/fetchData";

export const fetchNewsList = async () =>
  await fetchData<NewsList.INewsPages>(gql_newsList);
