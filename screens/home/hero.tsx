"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Copy } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReusableInView } from "@/lib/utils";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  const { ref: heroRef, inView: heroInView } = useReusableInView();

  const copyEmail = () => {
    navigator.clipboard.writeText("valomosh254@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      ref={heroRef}
      className="dark:bg-[#212121] rounded-xl p-3 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: heroInView ? 1 : 0.5,
        y: heroInView ? 0 : 30,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <span className="h-2 w-2 bg-green-500 animate-ping rounded-full mr-2"></span>
          <span className="text-zinc-600 dark:text-zinc-400">
            Software Engineer
          </span>
        </div>
        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-2 py-1 rounded-full">
          AVAILABLE FOR WORK
        </span>
      </div>

      <div
        className={`flex ${
          isMobile ? "flex-col items-start" : "flex-row  items-center"
        } justify-between  `}
      >
        <div className="flex-1">
          <motion.h1
            className="text-3xl font-bold mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I'm Valentine,
          </motion.h1>
          <motion.p
            className="text-zinc-600 dark:text-zinc-400 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Software Engineer from Nairobi, Kenya.
            <br />
            Currently a self-employed Freelancer .
          </motion.p>

          <div className="flex space-x-2">
            <Link href="/hire-me">
              <motion.button
                className="flex items-center space-x-2 bg-black dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] text-white px-4 py-2 rounded-md text-sm shadow-[0px_8px_16px_0px_rgba(22,_22,_22,_0),_0px_1px_1px_0px_rgba(23,_23,_23,_0.1),_inset_0px_-1px_1px_0px_var(rgba(204,_204,_204,_.1),_rgb(77,_77,_77)),_0px_0px_0px_5px_var(rgba(0,_0,_0,_0.16),rgba(0,_0,_0,_0.1))]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Hire Me</span>
              </motion.button>
            </Link>

            <motion.button
              className="flex items-center space-x-2 bg-white border dark:bg-[#212121] text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md text-sm"
              onClick={copyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Copy size={14} />
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </motion.button>
          </div>
        </div>

        <motion.div
          className="relative h-36 w-36 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 mt-4 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/home-avatar.png"
            alt="John Doe"
            fill
            className="object-cover object-center h-full w-full "
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
