// graphql queries
import { gql_newsList } from "@/queries/sections/newsList";
// lib
import { fetchDataPagination } from "@/app/lib/cms/shared/fetchDataPagination";

export const fetchNewsList = async (skip: number) =>
  await fetchDataPagination<NewsList.INewsPages>(gql_newsList, skip);
