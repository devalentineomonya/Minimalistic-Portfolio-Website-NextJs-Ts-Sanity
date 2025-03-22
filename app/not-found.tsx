"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SocialLinks from "@/components/social-links";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col">
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-2">
          <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
          <span className="text-zinc-600 dark:text-zinc-400">Oops! 404</span>
        </div>

        <motion.div
          className="relative h-36 w-36 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 my-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image
            src="/not-found-avatar.png"
            alt="Avatar"
          fill
            className="object-cover object-center absolute h-full w-full"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Page not found.
        </motion.h1>

        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page is does not exist.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/">
            <motion.button
              className="flex items-center space-x-2 bg-white border dark:bg-[#212121] text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md text-sm"
              whileHover={{ scale: 1.03, x: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <Link href="/projects">
            <motion.button
              className="flex items-center space-x-2 bg-black dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] text-white px-4 py-2 rounded-md text-sm shadow-[0px_8px_16px_0px_rgba(22,_22,_22,_0),_0px_1px_1px_0px_rgba(23,_23,_23,_0.1),_inset_0px_-1px_1px_0px_var(rgba(204,_204,_204,_.1),_rgb(77,_77,_77)),_0px_0px_0px_5px_var(rgba(0,_0,_0,_0.16),rgba(0,_0,_0,_0.1))]"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>See My Work</span>
              <ArrowRight size={14} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <Footer hideContact />
    </div>
  );
}
