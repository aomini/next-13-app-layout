import { getCategory } from "@/app/api/categories/getCategories";

export default async function page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });
  return <div>All {category.name}</div>;
}
