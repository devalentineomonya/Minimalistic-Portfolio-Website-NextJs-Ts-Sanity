import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import ProjectsPageClient from "@/screens/projects/ProjectsPageClient";
import { Projects, Products } from "@/sanity/sanity.types";
import { PRODUCTS_QUERY } from "../page";

export default async function ProjectsPage() {
  const PROJECTS_QUERY = defineQuery(`
    *[_type == "projects"] | order(_createdAt desc) {
      _id,
      id,
      name,
      description,
      iconBg,
      icon,
      client,
      company,
      projectType,
      year,
      fullDescription
    }`);

  const { data: projects } = (await sanityFetch({ query: PROJECTS_QUERY })) as {
    data: Projects[];
  };

  const { data: products } = (await sanityFetch({ query: PRODUCTS_QUERY })) as {
    data: Products[];
  };

  return <ProjectsPageClient products={products} projects={projects} />;
}
