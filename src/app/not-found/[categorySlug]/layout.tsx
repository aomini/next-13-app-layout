import React from "react";
import TabGroup from "@/component/tab-group";
import { getCategory, getCategories } from "@/app/api/categories/getCategories";

export const metadata = {
  title: "Not found",
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });

  return (
    <div>
      <TabGroup
        path={`/not-found/${category.slug}`}
        items={[
          { text: "All" },
          ...categories.map((x) => ({
            text: x.name,
            slug: x.slug,
          })),
          {
            text: "SubCategory that does not exist",
            slug: "does-not-exist",
          },
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
