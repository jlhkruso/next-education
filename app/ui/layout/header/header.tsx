// components
import { AtomImage } from "@/app/ui/atoms/image/image";
import HeaderLink from "./headerLink";
// lib
import { fetchHeader } from "@/app/lib/cms/fetchHeader";
// style
import styleReset from "@/styles/base/reset.module.scss";
import styleGrid from "@/styles/base/grid.module.scss";
import style from "./header.module.scss";

export default async function Header() {
  const data = await fetchHeader();
  const navigation = data?.setting?.navigation;
  const logo = data?.setting?.logo;

  return (
    <header>
      <div className={styleGrid.row}>
        {logo?.url && (
          <div className={styleGrid.col2}>
            <AtomImage src={logo.url} alt="logo" width={60} height={60} />
          </div>
        )}
        <ul className={`${styleReset.ulReset} ${styleGrid.col6}`}>
          {navigation &&
            navigation.map((item, id) => (
              <li key={id} className={`${style.header__Item}`}>
                <HeaderLink slug={item.slug} slugTitle={item.slugTitle} />
              </li>
            ))}
          <li className={`${style.header__Item}`}>
            <HeaderLink slug="/use-state" slugTitle="use state" />
          </li>
          <li className={`${style.header__Item}`}>
            <HeaderLink slug="/redux-toolkit" slugTitle="redux toolkit" />
          </li>
        </ul>
      </div>
    </header>
  );
}
