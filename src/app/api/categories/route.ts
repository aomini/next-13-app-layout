import type { Category } from "./category";
export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug");
  if (slug) {
    const category = data.find((category) => category.slug === slug);

    return new Response(JSON.stringify(category ?? null), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const parent = searchParams.get("parent");
  const categories = data.filter((category) => {
    return parent ? category.parent === parent : category.parent === null;
  });

  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

const data: Category[] = [
  { name: "Electronics", slug: "electronics", count: 11, parent: null },
  { name: "Clothing", slug: "clothing", count: 12, parent: null },
  { name: "Books", slug: "books", count: 10, parent: null },
  { name: "Phones", slug: "phones", count: 4, parent: "electronics" },
  { name: "Tablets", slug: "tablets", count: 5, parent: "electronics" },
  { name: "Laptops", slug: "laptops", count: 2, parent: "electronics" },
  { name: "Tops", slug: "tops", count: 3, parent: "clothing" },
  { name: "Shorts", slug: "shorts", count: 4, parent: "clothing" },
  { name: "Shoes", slug: "shoes", count: 5, parent: "clothing" },
  { name: "Fiction", slug: "fiction", count: 5, parent: "books" },
  { name: "Biography", slug: "biography", count: 2, parent: "books" },
  { name: "Education", slug: "education", count: 3, parent: "books" },
];
