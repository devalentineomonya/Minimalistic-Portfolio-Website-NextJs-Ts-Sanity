"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import Footer from "@/components/footer";

export default function AboutPage() {
  const { ref: bioRef, inView: bioInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: moreRef, inView: moreInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sideProjects = [
    {
      id: "goven",
      name: "Goven",
      icon: "G",
      iconBg: "#6366f1",
      category: "FRAMER TEMPLATE",
      description: "",
      url: "#",
    },
    {
      id: "upshift",
      name: "Upshift",
      icon: "U",
      iconBg: "#84cc16",
      category: "WEB DESIGN COLLECTIONS",
      description: "",
      url: "#",
    },
    {
      id: "subtle",
      name: "Subtle Folio",
      icon: "S",
      iconBg: "#d4d4d8",
      category: "FRAMER TEMPLATE",
      description: "",
      url: "#",
    },
  ];

  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg  min-h-[85vh] flex flex-col">
      <motion.section
        ref={bioRef}
        className=" rounded-xl p-3 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: bioInView ? 1 : 0.5,
          y: bioInView ? 0 : 30,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center mb-4">
          <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
          <span className="text-zinc-600 dark:text-zinc-400">About</span>
        </div>

        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: bioInView ? 1 : 0, x: bioInView ? 0 : -20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          It's Me John
        </motion.h1>

        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: bioInView ? 1 : 0, y: bioInView ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm John Doe, a product designer with over 5 years of experience,
          currently residing in Jakarta, Indonesia. I have a deep passion for
          crafting purposeful interfaces and products. My main goal is to bridge
          the divide between people and technology, transforming intricate
          challenges into meaningful and seamless experiences.
        </motion.p>

        <motion.div
          className="rounded-lg overflow-hidden mb-6 shadow-[rgba(102,_109,_128,_0.08)_0px_1px_1px_0px,_rgba(102,_109,_128,_0.08)_0px_4px_8px_0px,_rgb(255,_255_255)_0px_0px_0px_0px,_rgba(53,_56,_73,_0)_0px_0px_0px_3px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: bioInView ? 1 : 0, scale: bioInView ? 1 : 0.95 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="John Doe"
            width={400}
            height={400}
            className="w-full aspect-square object-cover"
          />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-4"
          ref={moreRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          More About Me
        </motion.h2>

        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          John Doe holds a bachelor's degree in Graphic Design from a
          prestigious university in the United States and has a relentless drive
          for staying up-to-date with the latest technologies and design trends.
          Actively involved in the design community, John regularly participates
          in diverse design conferences and meetups.
        </motion.p>

        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          When he's not immersed in design work, he finds solace in playing the
          guitar and exploring new coffee shops in his local area. John firmly
          believes in maintaining a healthy work-life balance, making sure to
          take breaks and reenergize his creativity. In his spare time, he also
          volunteers at a local animal shelter on weekends.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold mb-4"
          ref={projectsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: projectsInView ? 1 : 0,
            y: projectsInView ? 0 : 20,
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          My Side Projects
        </motion.h2>

        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: projectsInView ? 1 : 0,
            y: projectsInView ? 0 : 20,
          }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I did passion side projects in the weekend, please take a look you
          will love it (I hope).
        </motion.p>

        <div className="space-y-3 mb-6">
          {sideProjects.map((project, index) => (
            <ProjectCard
              project={project}
              inView={projectsInView}
              index={index}
              key={project.id}
            />
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
