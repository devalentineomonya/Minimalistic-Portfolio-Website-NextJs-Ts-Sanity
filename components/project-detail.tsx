"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  name: string
  icon: string
  iconBg: string
  description: string
  client?: string
  company?: string
  projectType?: string
  year?: string
  fullDescription?: string
}

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <motion.button
        className="flex items-center space-x-2 p-4 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        onClick={onClose}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        <ArrowLeft size={16} />
        <span>Back</span>
      </motion.button>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div className="text-zinc-600 dark:text-zinc-400" variants={itemVariants}>
            <span className="block text-sm mb-1">Client</span>
            <span className="block font-medium">{project.client || "N/A"}</span>
          </motion.div>
          <motion.div className="text-zinc-600 dark:text-zinc-400" variants={itemVariants}>
            <span className="block text-sm mb-1">Company</span>
            <span className="block font-medium">{project.company || "N/A"}</span>
          </motion.div>
          <motion.div className="text-zinc-600 dark:text-zinc-400" variants={itemVariants}>
            <span className="block text-sm mb-1">Project Type</span>
            <span className="block font-medium">{project.projectType || project.description}</span>
          </motion.div>
          <motion.div className="text-zinc-600 dark:text-zinc-400" variants={itemVariants}>
            <span className="block text-sm mb-1">Year</span>
            <span className="block font-medium">{project.year || "2023"}</span>
          </motion.div>
        </div>

        <div className="flex items-center space-x-3 mb-4">
          <motion.div
            className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: project.iconBg }}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {project.icon}
          </motion.div>
          <motion.h2 className="text-2xl font-bold" variants={itemVariants}>
            {project.name}
          </motion.h2>
        </div>

        <motion.p className="text-zinc-700 dark:text-zinc-300 mb-6" variants={itemVariants}>
          {project.fullDescription ||
            "A detailed project showcasing innovative design solutions and creative problem-solving. This project demonstrates attention to detail and user-centered design principles."}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="#"
            className="inline-flex items-center space-x-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 px-4 py-2 rounded-md text-sm transition-colors"
          >
            <span>Visit Website</span>
            <ExternalLink size={14} />
          </Link>
        </motion.div>

        <motion.div
          className="mt-6 rounded-lg overflow-hidden"
          variants={itemVariants}
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
      </div>
    </motion.div>
  )
}

