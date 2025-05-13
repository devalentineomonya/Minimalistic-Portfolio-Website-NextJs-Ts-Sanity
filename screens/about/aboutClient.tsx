"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Projects } from "@/sanity/sanity.types";
import ProjectsSection from "@/components/projects";

interface ProjectsMotionSectionProps {
  projects: Projects[];
}

export default function MotionSection({ projects }: ProjectsMotionSectionProps) {
  const { ref: bioRef, inView: bioInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: moreRef, inView: moreInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false, threshold: 0.1 });

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
        Hey there, I'm Valentine!
      </motion.h1>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: bioInView ? 1 : 0, y: bioInView ? 0 : 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I’m a passionate software engineer deeply committed to crafting scalable systems and
        user-friendly interfaces. I’ve worked across the stack — from elegant frontend UIs to
        low-latency backend services. But beyond the keyboard, I’m an explorer at heart.
        Whether I’m hiking new trails, going for long rides, or striking up conversations with
        strangers, I live for experiences that expand perspective and spark curiosity.
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
        More Than Just Code
      </motion.h2>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I value balance — that perfect mix of problem-solving behind a screen and recharging
        in nature. I believe the best ideas often come when you're away from your desk — maybe
        halfway up a hill or during a spontaneous chat with someone new. Life, like good code,
        is best when it's clean, intentional, and adaptable.
      </motion.p>

      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        What Drives Me
      </motion.h2>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        I’m fueled by a desire to build tools and platforms that genuinely improve people’s
        lives — whether it's through education, communication, or productivity. I’m drawn to
        systems that require deep thinking: real-time applications, backend infrastructure,
        and anything where performance matters.
      </motion.p>

      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: moreInView ? 1 : 0, y: moreInView ? 0 : 20 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Core Values
      </motion.h2>

      <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 mb-6 space-y-2">
        <li>Curiosity – staying open to new ideas, people, and paths.</li>
        <li>Craftsmanship – writing clean, thoughtful, and maintainable code.</li>
        <li>Community – building with empathy and giving back where I can.</li>
        <li>Growth – pushing beyond comfort zones, both personally and professionally.</li>
      </ul>

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
        What I’m Exploring Now
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
        Lately, I’ve been diving deeper into Go for backend development, exploring WebSockets
        for real-time apps, and refining my skills in system design and distributed
        architecture. I'm also building platforms that help students and professionals connect
        with the resources and people they need to thrive.
      </motion.p>

      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: projectsInView ? 1 : 0,
          y: projectsInView ? 0 : 20,
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
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
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        I work on side projects that reflect both my technical goals and personal values. From
        edtech tools and real-time dashboards to marketplaces and ride-hailing platforms —
        each one is a step in my journey of creating purposeful, delightful digital products.
        Have a look below!
      </motion.p>

      <ProjectsSection projects={projects} />
    </motion.section>
  );
}
