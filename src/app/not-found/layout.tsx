import React from "react";
import { getCategories } from "../api/categories/getCategories";
import TabGroup from "@/component/tab-group";

export const metadata = {
  title: "Not found",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div>
      <TabGroup
        path="/not-found"
        items={[
          { text: "home" },
          ...categories.map((x) => ({
            text: x.name,
            slug: x.slug,
          })),
          {
            text: "Category that does not exist",
            slug: "does-not-exist",
          },
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
