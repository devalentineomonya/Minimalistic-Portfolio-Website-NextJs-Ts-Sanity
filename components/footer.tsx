"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { useInView } from "react-intersection-observer";
import { Copy } from "lucide-react";

interface FooterPops {
  hideContact?: boolean;
}

const Footer: React.FC<FooterPops> = ({ hideContact = false }) => {
  const [copied, setCopied] = useState(false);

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("brian.do@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {!hideContact && (
        <motion.section
          ref={ctaRef}
          className="rounded-xl p-3 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: ctaInView ? 1 : 0.5,
            y: ctaInView ? 0 : 30,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Let's work together.
          </motion.h2>
          <motion.p
            className="text-zinc-600 dark:text-zinc-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Creating user experience and visual appealing design
          </motion.p>

          <div className="flex justify-center space-x-3">
            <Link href="/hire-me">
              <motion.button
                className="flex items-center space-x-2 bg-black dark:bg-[#373737] border dark:border-[#424242] border-[#f0f0f0] text-white px-4 py-2 rounded-md text-sm shadow-[0px_8px_16px_0px_rgba(22,_22,_22,_0),_0px_1px_1px_0px_rgba(23,_23,_23,_0.1),_inset_0px_-1px_1px_0px_var(rgba(204,_204,_204,_.1),_rgb(77,_77,_77)),_0px_0px_0px_5px_var(rgba(0,_0,_0,_0.16),rgba(0,_0,_0,_0.1))]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: ctaInView ? 1 : 0,
                  y: ctaInView ? 0 : 20,
                }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span>Hire Me</span>
              </motion.button>
            </Link>

            <motion.button
              className="flex items-center space-x-2 bg-zinc-100 border dark:bg-[#212121] text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md text-sm"
              onClick={copyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: ctaInView ? 1 : 0,
                y: ctaInView ? 0 : 20,
              }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Copy size={14} />
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </motion.button>
          </div>
        </motion.section>
      )}

      <SocialLinks />

      <motion.footer
        className="text-center text-zinc-500 text-sm mt-2 dark:bg-[#2c2c2c] bg-zinc-100 py-14 shadow-md rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        &copy; {new Date().getFullYear()} Devalentine
        <br />
        by
        <Link
          href="#"
          className="text-zinc-600 dark:text-zinc-300 hover:underline mr-3"
        >
          Valentine Omonya
        </Link>
        //
        <Link
          href="#"
          className="text-zinc-600 dark:text-zinc-300 hover:underline"
        >
          NextJs
        </Link>
        //
        <Link
          href="#"
          className="text-zinc-600 dark:text-zinc-300 hover:underline"
        >
          Framer
        </Link>
      </motion.footer>
    </>
  );
};

export default Footer;
