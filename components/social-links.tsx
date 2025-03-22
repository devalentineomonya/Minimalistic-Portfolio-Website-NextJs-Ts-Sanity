"use client"

import { motion } from "framer-motion"
import { Twitter, Instagram, Dribbble, Linkedin } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <motion.div
      className="dark:bg-[#2c2c2c] bg-background rounded-xl p-4 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center mb-2">
        <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
        <span className="text-zinc-600 dark:text-zinc-400">Follow Me</span>
      </div>

      <div className="flex justify-center space-x-6">
        {socialLinks.map((social, index) => (
          <Link href={social.href} key={social.label}>
            <motion.div
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white dark:bg-[#212121] bg-white rounded-full shadow-md backdrop-blur-sm"
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 + index * 0.1 },
              }}
            >
              <social.icon size={20} />
              <span className="sr-only">{social.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
