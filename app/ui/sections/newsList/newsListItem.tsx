// components
import { RTE } from "@/app/ui/atoms/rte/rte";
import { AtomImage } from "@/app/ui/atoms/image/image";

export const NewsListItem = async ({ createdDate, hero }: NewsList.INews) => {
  console.log("hero", hero);
  return (
    <div>
      {hero.heroImage && <AtomImage src={hero.heroImage.image.url} />}
      {hero.heroTitle && <h3>{hero.heroTitle}</h3>}
      {createdDate && <span>{createdDate}</span>}
    </div>
  );
};
