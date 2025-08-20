"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxContainer } from "./parallax/parallax-container";
import { ParallaxBackground } from "./parallax/parallax-background";
import { FloatingElements } from "./parallax/floating-elements";
import { CONTENT } from "@/constants/content";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-4xl mx-auto pb-20 md:pb-17"
      >
        <ParallaxContainer speed={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {CONTENT.hero.name}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {CONTENT.hero.title}
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {CONTENT.hero.description}
            </motion.p>
          </motion.div>
        </ParallaxContainer>

        <ParallaxContainer speed={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {CONTENT.hero.viewWork}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                {CONTENT.hero.getInTouch}
              </Button>
            </motion.div>
          </motion.div>
        </ParallaxContainer>

        <ParallaxContainer speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              {
                href: "https://github.com/nived-ram",
                Icon: Github,
                color: "hover:bg-gray-100 dark:hover:bg-gray-800",
              },
              {
                href: "https://linkedin.com/in/nived-ram",
                Icon: Linkedin,
                color: "hover:bg-blue-100 dark:hover:bg-blue-900",
              },
              {
                href: "mailto:nivedchempakam@gmail.com",
                Icon: Mail,
                color: "hover:bg-red-100 dark:hover:bg-red-900",
              },
            ].map(({ href, Icon, color }, index) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${color} transition-all duration-300 shadow-md hover:shadow-lg`}
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </ParallaxContainer>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowDown className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
