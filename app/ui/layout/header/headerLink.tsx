"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header({ data }: any) {
  const pathname = usePathname();
  return (
    <Link
      href={data.path}
      className={clsx("navigation__item", {
        "is-active": pathname === data.path,
      })}
    >
      {data.title}
    </Link>
  );
}
