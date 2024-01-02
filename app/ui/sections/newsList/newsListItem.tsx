// components
import { RTE } from "@/app/ui/atoms/rte/rte";
import { AtomImage } from "@/app/ui/atoms/image/image";
import { formatDate } from "@/app/lib/utils/formatDate";

// react components
import Link from "next/link";

export const NewsListItem = async ({
  createdDate,
  hero,
  slug,
}: NewsList.INews) => {
  return (
    <Link href={"/news/" + slug}>
      {hero.heroImage && <AtomImage src={hero.heroImage.image.url} />}
      {hero.heroTitle && <h3>{hero.heroTitle}</h3>}
      {createdDate && <span>{formatDate(createdDate)}</span>}
      {hero.heroBodytext && <RTE htmlContent={hero.heroBodytext} />}
    </Link>
  );
};
