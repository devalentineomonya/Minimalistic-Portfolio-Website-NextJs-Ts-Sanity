"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/project-card";
import ProjectDetail from "@/components/project-detail";
import Footer from "@/components/footer";
import ProductsSection from "@/components/products";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      id: "morva",
      name: "Morva labs",
      icon: "M",
      iconBg: "#4f46e5",
      description: "Visual design, Branding",
      client: "Nur Pradiya",
      company: "Morva labs",
      projectType: "Visual design, Branding",
      year: "2023",
      fullDescription:
        "Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience, efficient employee management, and a competitive edge.",
    },
    {
      id: "rectangle",
      name: "Rectangle",
      icon: "R",
      iconBg: "#6366f1",
      description: "Product design, Icon design",
    },
    {
      id: "simply",
      name: "Simply",
      icon: "S",
      iconBg: "#ef4444",
      description: "Landing page, Illustration design",
    },
    {
      id: "glassdoor",
      name: "Glassdoor",
      icon: "G",
      iconBg: "#0ea5e9",
      description: "Icon design, Illustration design",
    },
    {
      id: "seven",
      name: "Seven LTD.",
      icon: "7",
      iconBg: "#8b5cf6",
      description: "Branding, Landing page",
    },
  ];



  return (
    <div className="min-h-[85vh] flex flex-col">
      <AnimatePresence mode="wait">
        {activeProject ? (
          <ProjectDetail
            project={projects.find((p) => p.id === activeProject)!}
            onClose={() => setActiveProject(null)}
          />
        ) : (
          <>
            <motion.section
              ref={projectsRef}
              className=" rounded-xl p-2 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: projectsInView ? 1 : 0.5,
                y: projectsInView ? 0 : 30,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4">
                <span className="h-2 w-2 bg-zinc-500 rounded-full mr-2"></span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  Projects
                </span>
              </div>

              <motion.h2
                className="text-3xl font-bold mb-1 mt-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: projectsInView ? 1 : 0,
                  x: projectsInView ? 0 : -20,
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                My Works
              </motion.h2>
              <motion.p
                className="text-zinc-600 dark:text-zinc-400  my-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: projectsInView ? 1 : 0,
                  x: projectsInView ? 0 : -20,
                }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Discover my portfolio, where purposeful interfaces meet
                captivating design. My work strives to enhance experiences and
                inspirie.
              </motion.p>

              <div className="space-y-3 my-6 dark:bg-[#2c2c2c] bg-zinc-100 p-6  rounded-lg">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    inView={projectsInView}
                  />
                ))}
              </div>
            </motion.section>

            <motion.section
              ref={productsRef}
              className=" rounded-xl p-6 pb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: productsInView ? 1 : 0.5,
                y: productsInView ? 0 : 30,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl font-bold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: productsInView ? 1 : 0,
                  x: productsInView ? 0 : -20,
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Explore My Products
              </motion.h2>
              <motion.p
                className="text-zinc-600 dark:text-zinc-400 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: productsInView ? 1 : 0,
                  x: productsInView ? 0 : -20,
                }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Some of the digital products that I worked on as side projects,
                explore them now
              </motion.p>

              <ProductsSection />
            </motion.section>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
