import Footer from "@/components/footer";
import AboutContent from "@/screens/about/aboutClient";
import { PROJECTS_QUERY } from "../page";
import { Projects } from "@/sanity/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";

export default async function AboutPage() {
  const { data: projects } = (await sanityFetch({ query: PROJECTS_QUERY })) as {
    data: Projects[];
  };
  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg min-h-[85vh] flex flex-col">
      <AboutContent projects={projects} />
      <Footer />
    </div>
  );
}
