import { fetchData } from "@/app/lib/cms/shared/fetchData";
import { gql_header } from "@/queries/layout/header";
export const fetchHeader = async () =>
  await fetchData<Global.ISettings>(gql_header);
