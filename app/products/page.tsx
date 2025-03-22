"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import ProjectsSection from "@/components/projects";

export default function ProductsPage() {
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const products = [
    {
      id: "portafo",
      name: "Portafo",
      icon: "P",
      iconBg: "#64748b",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
    {
      id: "faktur",
      name: "Faktur Invoice",
      icon: "F",
      iconBg: "#94a3b8",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
    {
      id: "goven",
      name: "Goven",
      icon: "G",
      iconBg: "#6366f1",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
    {
      id: "subtle",
      name: "Subtle Folio",
      icon: "S",
      iconBg: "#d4d4d8",
      category: "FRAMER TEMPLATE",
      url: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-[85vh] flex flex-col">
      <motion.section
        ref={productsRef}
        className="flex-1 rounded-xl p-3 mb-6"
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex items-center mb-4">
          <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
          <span className="text-zinc-600 dark:text-zinc-400">Products</span>
        </div>

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

        <div className="my-6 dark:bg-[#2c2c2c] bg-zinc-100 p-5 rounded-lg">
          <div className="flex items-center mb-4">
            <span className="h-2 w-2 bg-zinc-500 rounded-full mr-2"></span>
            <span className="text-zinc-500 dark:text-zinc-300 text-lg">
              Products
            </span>
          </div>

          <div className="space-y-3 mt-8">
            {products.map((product, index) => (
              <ProductCard
                product={product}
                inView={productsInView}
                index={index}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </motion.section>
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
          <span className="text-zinc-600 dark:text-zinc-400">Projects</span>
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
          Discover my portfolio, where purposeful interfaces meet captivating
          design. My work strives to enhance experiences and inspirie.
        </motion.p>

        <ProjectsSection />
      </motion.section>

      <Footer />
    </div>
  );
}
