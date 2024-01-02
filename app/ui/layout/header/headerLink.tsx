"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header: React.FC<Global.ISlug> = ({ slug, slugTitle }) => {
  const pathname = usePathname();
  // const isActive = pathname.startsWith(`/${slug}/`);
  const isActive = () => {
    if (pathname.startsWith(`/${slug}`) || slug === pathname) {
      return true;
    } else return false;
  };

  return (
    <Link
      href={slug}
      className={clsx("navigation__item", {
        "is-active": isActive(),
      })}
    >
      {slugTitle}
    </Link>
  );
};
export default Header;
