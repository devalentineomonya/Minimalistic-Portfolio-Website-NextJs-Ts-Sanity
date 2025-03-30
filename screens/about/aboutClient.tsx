"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Projects } from "@/sanity/sanity.types";
import ProjectsSection from "@/components/projects";

interface ProjectsMotionSectionProps {
  projects: Projects[];
}
export default function MotionSection({
  projects,
}: ProjectsMotionSectionProps) {
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

  return (
    <motion.section
      ref={bioRef}
      className="rounded-xl mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: bioInView ? 1 : 0.5, y: bioInView ? 0 : 30 }}
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
        It's Me Valentine
      </motion.h1>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: bioInView ? 1 : 0, y: bioInView ? 0 : 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm Valentine, a passionate software engineer with experience in
        full-stack development, system design, and UI/UX. My mission is to build
        innovative solutions that enhance user experiences and push the
        boundaries of technology.
      </motion.p>

      <motion.div
        className="rounded-lg overflow-hidden mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: bioInView ? 1 : 0, scale: bioInView ? 1 : 0.95 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Valentine"
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
        I specialize in modern web development, focusing on high-performance
        applications and scalable systems. My interests include AI, SaaS, and
        backend optimization, ensuring efficient and seamless digital
        experiences.
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
        I work on exciting side projects, including full-stack applications and
        performance-driven platforms. Check them out—you might find something
        interesting!
      </motion.p>
      <ProjectsSection projects={projects} />
    </motion.section>
  );
}
