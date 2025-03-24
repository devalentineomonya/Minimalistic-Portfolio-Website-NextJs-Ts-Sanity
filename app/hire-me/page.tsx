"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialLinks from "@/components/social-links";
import Footer from "@/components/footer";

export default function HireMePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-background dark:bg-[#212121] rounded-lg  min-h-[70vh] flex flex-col">
      <motion.section
        ref={ref}
        className="flex-1 rounded-xl p-3 mb-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-zinc-600 dark:text-zinc-400">Hire Me</span>
          </div>
          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 px-2 py-1 rounded-full">
            AVAILABLE FOR WORK
          </span>
        </div>

        <motion.h1 className="text-3xl font-bold my-2" variants={itemVariants}>
          Design Inquiry
        </motion.h1>

        <motion.p
          className="text-zinc-600 dark:text-zinc-400 my-6"
          variants={itemVariants}
        >
          Got an idea and need design help? Reach out now
        </motion.p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-100 inset-1 dark:bg-[#373737] outline-none border border-[#e6e6e6] dark:border-[#424242] rounded-md p-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:focus:ring-zinc-300 transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-100 inset-1 dark:bg-[#373737] outline-none border border-[#e6e6e6] dark:border-[#424242] rounded-md p-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:focus:ring-zinc-300 transition-all"
              />
            </motion.div>
          </div>

          <motion.div className="mb-4" variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-zinc-100 inset-1 dark:bg-[#373737] outline-none border border-[#e6e6e6] dark:border-[#424242] rounded-md p-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:focus:ring-zinc-300 transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="isolate relative w-full flex items-center space-x-2 bg-black dark:bg-[#373737] text-white px-4 py-4 rounded-md text-sm shadow-[0px_8px_16px_0px_rgba(22,_22,_22,_0),_0px_1px_1px_0px_rgba(23,_23,_23,_0.1),_inset_0px_-1px_1px_0px_var(rgba(204,_204,_204,_.1),_rgb(77,_77,_77)),_0px_0px_0px_5px_var(rgba(0,_0,_0,_0.16),rgba(0,_0,_0,_0.1))] justify-center"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={isSubmitting || isSubmitted}
            >
              <motion.div
                className="absolute inset-0 bg-green-500/50 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isSubmitting ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />

              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: isSubmitted ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.span>

              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isSubmitted ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                Thank you! I'll be in touch soon.
              </motion.span>
            </motion.button>
          </motion.div>
        </form>
      </motion.section>

      <Footer hideContact />
    </div>
  );
}
