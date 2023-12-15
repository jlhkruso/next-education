"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header: React.FC<Global.ISlug> = ({ slug, slugTitle }) => {
  const pathname = usePathname();
  return (
    <Link
      href={slug}
      className={clsx("navigation__item", {
        "is-active": pathname === "/" + slug || slug === pathname,
      })}
    >
      {slugTitle}
    </Link>
  );
};
export default Header;
