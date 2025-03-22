"use client";

import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import HeroSection from "@/screens/home/hero";
import ProjectsSection from "@/components/projects";
import ProductsSection from "@/components/products";

export default function HomePage() {
  return (
    <div className="min-h-[85vh] flex flex-col">
      <AnimatePresence mode="wait">
        <>
          <HeroSection />
          <ProjectsSection />
          <ProductsSection />
          <Footer />
        </>
      </AnimatePresence>
    </div>
  );
}
