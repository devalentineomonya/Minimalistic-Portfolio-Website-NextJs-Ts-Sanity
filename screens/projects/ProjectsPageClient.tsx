"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/project-card";
import ProjectDetail from "@/components/project-detail";
import Footer from "@/components/footer";
import ProductsSection from "@/components/products";
import { Products, Projects } from "@/sanity/sanity.types";

export default function ProjectsPageClient({
  projects,
  products,
}: {
  projects: Projects[];
  products: Products[];
}) {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg  min-h-[85vh] flex flex-col">
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
              <div className="space-y-3 my-6 dark:bg-[#2c2c2c] bg-zinc-100 p-6  rounded-lg">
                {projects?.map((project, index) => (
                  <ProjectCard
                    key={project._id}
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
            ></motion.section>
            <ProductsSection products={products} />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
