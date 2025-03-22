"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import ProjectsSection from "@/components/projects";

interface ProjectsSignature {
  [key: string]: {
    id: string;
    name: string;
    icon: string;
    iconBg: string;
    description: string;
    projectType: string;
    problemsToSolve?: string;
    businessOwner?: string;
    solution?: string;
    images?: string[];
    year: string;
  };
}

export default function ProjectPage() {
  const params = useParams();

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

  const { ref: otherProjectsRef, inView: otherProjectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects: ProjectsSignature = {
    morva: {
      id: "morva",
      name: "Morva labs",
      icon: "M",
      iconBg: "#4f46e5",
      description:
        "Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience, efficient employee management, and a competitive edge.",
      projectType: "Visual design, Branding",
      year: "2023",
      businessOwner:
        "A business owner enlisted my expertise as a product designer to develop a website that would boost their brand presence in multiple dimensions. Creating a modern, professional website, my priority was to set them apart from competitors and attract more clients.",
      problemsToSolve:
        "To tackle this endeavor, our approach revolved around shaping a unique brand identity that strictly conveyed Rectangle's fundamental principles of sustainability, innovation, and authenticity. Our team devoted meticulous attention to crafting an all-encompassing brand strategy, ensuring a cohesive visual language throughout development, geared towards establishing a visually captivating and unforgettable brand presence, distinguishing Rectangle amidst its competition.",
      solution:
        "Through thoughtful product design, we ensured that Rectangle's offerings seamlessly aligned with their core values, incorporating sustainable materials and innovative design principles. Concurrently, our website development focused on a user-centric approach that not only showcased Rectangle's products but also effectively conveyed their environmental mission, fostering authentic engagement with visitors.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    rectangle: {
      id: "rectangle",
      name: "Rectangle",
      icon: "R",
      iconBg: "#6366f1",
      description: "Product design, Icon design",
      projectType: "Product design, Icon design",
      year: "2023",
    },
    simply: {
      id: "simply",
      name: "Simply",
      icon: "S",
      iconBg: "#ef4444",
      description: "Landing page, Illustration design",
      projectType: "Landing page, Illustration design",
      year: "2022",
    },
    glassdoor: {
      id: "glassdoor",
      name: "Glassdoor",
      icon: "G",
      iconBg: "#0ea5e9",
      description: "Icon design, Illustration design",
      projectType: "Icon design, Illustration design",
      year: "2023",
    },
    seven: {
      id: "seven",
      name: "Seven LTD.",
      icon: "7",
      iconBg: "#8b5cf6",
      description: "Branding, Landing page",
      projectType: "Branding, Landing page",
      year: "2022",
    },
  };

  const projectId = params?.id as string;
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    notFound();
  }

  const otherProjects = Object.values(projects)
    .filter((p) => p.id !== projectId)
    .slice(0, 4);

  return (
    <div className="min-h-[85vh] flex flex-col">
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

        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            className="h-12 w-12 rounded-full flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: project.iconBg }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {project.icon}
          </motion.div>
          <h1 className="text-3xl font-bold">{project.name}</h1>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {project.description}
        </p>

        <Link href="#" className="inline-block mb-6">
          <motion.button
            className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] dark:text-zinc-400 flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors bg-background shadow p-2 rounded-md gap-x-3"
            whileHover={{ scale: 1.03, x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Visit Website</span>
            <ExternalLink size={16} />
          </motion.button>
        </Link>

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
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contentInView ? 1 : 0,
            y: contentInView ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {project.businessOwner ||
              "A business owner enlisted my expertise as a product designer to develop a website that would boost their brand presence in multiple dimensions. Creating a modern, professional website, my priority was to set them apart from competitors and attract more clients."}
          </p>
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
            {project.problemsToSolve ||
              "To tackle this endeavor, our approach revolved around shaping a unique brand identity that strictly conveyed Rectangle's fundamental principles of sustainability, innovation, and authenticity. Our team devoted meticulous attention to crafting an all-encompassing brand strategy, ensuring a cohesive visual language throughout development, geared towards establishing a visually captivating and unforgettable brand presence, distinguishing Rectangle amidst its competition."}
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
            {project.solution ||
              "Through thoughtful product design, we ensured that Rectangle's offerings seamlessly aligned with their core values, incorporating sustainable materials and innovative design principles. Concurrently, our website development focused on a user-centric approach that not only showcased Rectangle's products but also effectively conveyed their environmental mission, fostering authentic engagement with visitors."}
          </p>
        </motion.div>
      </motion.section>

      <ProjectsSection />

      <Footer />
    </div>
  );
}
