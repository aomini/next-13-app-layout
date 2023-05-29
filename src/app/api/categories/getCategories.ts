import "server-only";
import { notFound } from "next/navigation";
import type { Category } from "./category";

export const getCategories = async ({ parent }: { parent?: string } = {}) => {
  const res = await fetch(
    `http://localhost:3000/api/categories${parent ? `?parent=${parent}` : ""}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const categories = (await res.json()) as Category[];
  console.log("@@@@", categories);

  if (categories.length === 0) {
    notFound();
  }

  return categories;
};

export async function getCategory({ slug }: { slug: string }) {
  const res = await fetch(
    `http://localhost:3000/api/categories${slug ? `?slug=${slug}` : ""}`
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const category = (await res.json()) as Category;

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return category;
}
