"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects";
import { Projects } from "@/sanity/sanity.types";
import { useReusableInView } from "@/lib/utils";

interface ProjectPageProps {
  project: Projects;
  projects: Projects[];
}

export default function ProjectPageClient({
  project,
  projects,
}: ProjectPageProps) {
  const { ref: headerRef, inView: headerInView } = useReusableInView();
  const { ref: problemRef, inView: problemInView } = useReusableInView();
  const { ref: solutionRef, inView: solutionInView } = useReusableInView();

  const formatImageUrl = (image: { asset: { _ref: string } }) => {
    if (!image?.asset?._ref) {
      return "/placeholder.svg?height=400&width=600";
    }

    return `https://cdn.sanity.io/images/${
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    }/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${image.asset._ref
      .replace("image-", "")
      .replace("-png", ".png")}`;
  };

  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg min-h-[85vh] flex flex-col">
      <motion.section
        ref={headerRef}
        className=" rounded-xl p-3 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: headerInView ? 1 : 0.5,
          y: headerInView ? 0 : 30,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center mb-1">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Project Type
              </span>
            </div>
            <div className="text-sm text-zinc-800 dark:text-zinc-200">
              {project.projectType}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Year
              </span>
            </div>
            <div className="text-sm text-zinc-800 dark:text-zinc-200">
              {project.year}
            </div>
          </div>
        </div>

        <div className="flex items-center w-full mb-4 gap-x-4">
          <motion.div
            className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-medium text-lg "
            style={{ backgroundColor: project.iconBg }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {project.icon}
          </motion.div>

          <h1 className="text-3xl font-semibold ">
            {project.name} - {project.businessOwner}
          </h1>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center  space-x-2">
            <Link href={project.liveDemo || "#"} className="inline-block ">
              <motion.button
                className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] dark:text-zinc-400
             flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors bg-background shadow p-2 rounded-md gap-x-3

             whitespace-nowrap"
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Visit Website</span>
                <ExternalLink size={16} />
              </motion.button>
            </Link>

            <Link href={project.githubLink || "#"} className="inline-block ">
              <motion.button
                className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] dark:text-zinc-400
             flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors bg-background shadow p-2 rounded-md gap-x-3 whitespace-normal"
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Visit Github</span>
                <Github size={16} />
              </motion.button>
            </Link>
          </div>
          <div className="flex flex-wrap  space-x-2 space-y-2 items-center">
            {project.techStack?.map((tech, index) => (
              <div
                key={index}
                className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] dark:text-zinc-400
             flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors bg-background shadow px-3 py-1 rounded-md gap-x-3 my-5"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="rounded-lg overflow-hidden mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src={formatImageUrl(
              project.images?.[0] as { asset: { _ref: string } }
            )}
            alt={project.name}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {project.description}
        </p>

        <motion.div
          className="rounded-lg overflow-hidden mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src={formatImageUrl(
              project.images?.[1] as { asset: { _ref: string } }
            )}
            alt={`${project.name} screenshot 2`}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          ref={problemRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: problemInView ? 1 : 0,
            y: problemInView ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">The Problems to Solve</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {project.problemsToSolve}
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg overflow-hidden mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src={formatImageUrl(
              project.images?.[2] as { asset: { _ref: string } }
            )}
            alt={`${project.name} screenshot 3`}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          ref={solutionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: solutionInView ? 1 : 0,
            y: solutionInView ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {project.solution}
          </p>
        </motion.div>
        <motion.div
          className="rounded-lg overflow-hidden mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src={formatImageUrl(
              project.images?.[3] as { asset: { _ref: string } }
            )}
            alt={`${project.name} screenshot 4`}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>
      </motion.section>

      <ProjectsSection projects={projects} />

      <Footer />
    </div>
  );
}
