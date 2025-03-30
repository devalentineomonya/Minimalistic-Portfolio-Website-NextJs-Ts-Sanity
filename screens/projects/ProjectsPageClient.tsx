"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/project-card";
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
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  console.log(projects);

  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg  min-h-[85vh] flex flex-col">
      <AnimatePresence mode="wait">
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
              <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-zinc-600 dark:text-zinc-400">Projects</span>
            </div>

            <motion.h2
              className="text-3xl font-bold mb-1"
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
              className="text-zinc-600 dark:text-zinc-400 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: projectsInView ? 1 : 0,
                x: projectsInView ? 0 : -20,
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover my portfolio, where purposeful interfaces meet
              captivating design. My work strives to enhance experiences and
              inspire.
            </motion.p>

            <div className="space-y-3 my-6 dark:bg-[#2c2c2c] bg-zinc-100 px-3 py-6  rounded-lg">
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
            className=" rounded-xl px-3 py-6 pb-6"
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
            <ProductsSection products={products} />
          </motion.section>
          <Footer />
        </>
      </AnimatePresence>
    </div>
  );
}
