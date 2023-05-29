"use client";
import Link from "next/link";
import { Item } from "./tab-group";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export default function Tab({ path, item }: { path: string; item: Item }) {
  const segment = useSelectedLayoutSegment();
  const href = item.slug ? path + "/" + item.slug : path;

  console.log(segment, "segments");

  const isActive = (!item.slug && segment === null) || segment === item.slug;

  return (
    <Link href={href} style={isActive ? { color: "blue" } : {}}>
      {item.text}
    </Link>
  );
}
