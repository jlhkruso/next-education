// components
import { RTE } from "@/app/ui/atoms/rte/rte";
import { AtomImage } from "@/app/ui/atoms/image/image";
// lib
import { fetchNewsList } from "@/app/lib/cms/fetchNewsList";
// style
import styles from "./newsList.module.scss";

export const NewsList = async () => {
  const data = await fetchNewsList();
  console.log("data", data);
  return (
    <div className={styles.newsList}>
      <h1>newslist</h1>
    </div>
  );
};
