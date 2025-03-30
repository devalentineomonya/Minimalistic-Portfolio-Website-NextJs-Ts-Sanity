"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Folder, ShoppingBag, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/projects", icon: Folder, label: "Projects" },
    { path: "/products", icon: ShoppingBag, label: "Products" },
  ]

  if (!mounted) return null

  return (
    <motion.nav
      className="sticky top-4 z-50 flex items-center justify-between shadow-[rgba(10,_10,_10,_0.06)_0px_1.2px_1.2px_0px,_rgba(10,_10,_10,_0.04)_0px_5px_10px_0px]  bg-white dark:bg-[#212121] rounded-xl p-3 mb-6 max-w-xl mx-auto mt-4 w-[calc(100%-1rem)]"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-1 sm:space-x-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <Link href={item.path} key={item.path}>
              <motion.div
                className={`p-2 rounded-lg transition-colors relative ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={18} />
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white mx-2"
                    layoutId="navbar-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>

      <motion.button
        className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        whileHover={{ scale: 1.05, rotate: 15 }}
        whileTap={{ scale: 0.95, rotate: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  )
}
