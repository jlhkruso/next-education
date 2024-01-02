// components
import { NewsListItem } from "./newsListItem";
import { PaginationComponent } from "./newsListPagination";
// lib
import { fetchNewsList } from "@/app/lib/cms/fetchNewsList";
// style
import styles from "./newsList.module.scss";
import styleReset from "@/styles/base/reset.module.scss";
import styleGrid from "@/styles/base/grid.module.scss";

export const NewsList = async () => {
  const initialData = await fetchNewsList(0);

  return (
    <div className={`${styles.newsList}`}>
      {initialData?.newsPages && (
        <ul className={`${styleReset.ulReset} ${styleGrid.row}`}>
          {initialData?.newsPages.map((item, id) => (
            <li key={id} className={`${styleGrid.col12} ${styleGrid.colmd4}`}>
              <NewsListItem
                createdDate={item.createdDate}
                hero={item.hero}
                slug={item.slug}
              />
            </li>
          ))}
        </ul>
      )}
      <PaginationComponent initialData={initialData.newsPages} />
    </div>
  );
};
