import Footer from "@/components/footer";
import HeroSection from "@/screens/home/hero";
import ProjectsSection from "@/components/projects";
import ProductsSection from "@/components/products";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { Products, Projects } from "@/sanity/sanity.types";

export const PRODUCTS_QUERY = defineQuery(`
      *[_type == "products"][0..3] |  order(_createdAt desc) {
          id,
          name,
          icon,
          iconBg,
          category,
          url,
      }`);

export const PROJECTS_QUERY = defineQuery(`
            *[_type == "projects"][0..3] |  order(_createdAt desc) {
                name,
                description,
                id,
                iconBg,
                icon
            }`);

export default async function HomePage() {
  const { data: products } = (await sanityFetch({ query: PRODUCTS_QUERY })) as {
    data: Products[];
  };
  const { data: projects } = (await sanityFetch({ query: PROJECTS_QUERY })) as {
    data: Projects[];
  };
  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg  min-h-[85vh] flex flex-col">
      <>
        <HeroSection />
        <ProjectsSection projects={projects} />
        <ProductsSection products={products} />
        <Footer />
      </>
    </div>
  );
}
