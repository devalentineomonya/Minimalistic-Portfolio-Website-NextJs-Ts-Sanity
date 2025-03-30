"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects";
import { Projects } from "@/sanity/sanity.types";

interface ProjectPageProps {
  project: Projects;
  projects: Projects[];
}

export default function ProjectPageClient({
  project,
  projects,
}: ProjectPageProps) {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: problemRef, inView: problemInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: solutionRef, inView: solutionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

        <div className="flex items-center space-x-4 mb-4 gap-x-2">
          <motion.div
            className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-medium text-lg "
            style={{ backgroundColor: project.iconBg }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {project.icon}
          </motion.div>

          <h1 className="text-3xl font-bold">
            {project.name} - {project.businessOwner}
          </h1>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-x-2">
          <Link href={project.liveDemo || "#"} className="inline-block mb-6">
            <motion.button
              className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] dark:text-zinc-400
             flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors bg-background shadow p-2 rounded-md gap-x-3"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Visit Website</span>
              <ExternalLink size={16} />
            </motion.button>
          </Link>

          <Link
            href={project.githubLink || "#"}
            className="inline-block mb-6 ml-4"
          >
            <motion.button
              className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] dark:text-zinc-400
             flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors bg-background shadow p-2 rounded-md gap-x-3"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Visit Github</span>
              <Github size={16} />
            </motion.button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 my-5 w-full">
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
        <motion.div
          className="rounded-lg overflow-hidden mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt={project.name}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          className="rounded-lg overflow-hidden mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
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
            src="/placeholder.svg?height=400&width=600"
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
      </motion.section>

      <ProjectsSection projects={projects} />

      <Footer />
    </div>
  );
}
