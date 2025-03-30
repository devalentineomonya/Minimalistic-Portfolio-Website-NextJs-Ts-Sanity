import { sanityFetch } from "@/sanity/lib/live";
import { Projects } from "@/sanity/sanity.types";
import { defineQuery } from "next-sanity";
import ProjectPageClient from "@/screens/projects/ProjectPageClient.";
import { notFound } from "next/navigation";
interface ProjectDataProps {
  id: string;
}

export default async function ProjectData({
  params,
}: {
  params: Promise<ProjectDataProps>;
}) {
  const { id } = await params;
  const PROJECT_QUERY = defineQuery(
    `*[_type == "projects" && id == "${id}"][0]`
  );

  const OTHER_PROJECTS_QUERY = defineQuery(
    `*[_type=="projects" && id != ${id}] [0..3] |  order(_createdAt desc) {
                name,
                description,
                id,
                iconBg,
                icon
            }`
  );

  const { data: project } = (await sanityFetch({ query: PROJECT_QUERY })) as {
    data: Projects | undefined;
  };

  const { data: projects } = (await sanityFetch({
    query: OTHER_PROJECTS_QUERY,
  })) as {
    data: Projects[];
  };

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} projects={projects} />;
}
