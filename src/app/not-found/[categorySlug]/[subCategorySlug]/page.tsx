import { getCategory } from "@/app/api/categories/getCategories";

export default async function Page({
  params,
}: {
  params: { categorySlug: string; subCategorySlug: string };
}) {
  const category = await getCategory({ slug: params.subCategorySlug });

  return <div>{category.name}</div>;
}
