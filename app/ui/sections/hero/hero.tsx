// components
import { RTE } from "@/app/ui/atoms/rte/rte";
import { AtomImage } from "@/app/ui/atoms/image/image";
// style
import styles from "./hero.module.scss";

export const Hero = ({ data }: Hero.IData) => {
  return (
    <div className={styles.hero}>
      {data.heroTitle && <h1>{data.heroTitle}</h1>}
      {data.heroBodytext && <RTE htmlContent={data.heroBodytext} />}
      {data.heroImage && (
        <AtomImage
          src={data.heroImage.image?.url}
          alt={data.heroImage.alt}
          width={1600}
          height={900}
        />
      )}
    </div>
  );
};
