"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxContainer } from "./parallax/parallax-container";
import { CONTENT } from "@/constants/content";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: CONTENT.about.services.fullStack.title,
      description: CONTENT.about.services.fullStack.description,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: CONTENT.about.services.uiux.title,
      description: CONTENT.about.services.uiux.description,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: CONTENT.about.services.mobile.title,
      description: CONTENT.about.services.mobile.description,
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: CONTENT.about.services.web.title,
      description: CONTENT.about.services.web.description,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ParallaxContainer speed={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {CONTENT.about.title}
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {CONTENT.about.description}
            </p>
          </motion.div>
        </ParallaxContainer>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ParallaxContainer key={service.title} speed={0.2 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="h-[300px] hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`mb-4 bg-gradient-to-r ${service.gradient} p-3 rounded-full inline-block text-white`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ParallaxContainer>
          ))}
        </div>

        <ParallaxContainer speed={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 border-0 shadow-xl">
              <CardContent className="p-8">
                <motion.h3
                  className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileInView={{ scale: [0.9, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {CONTENT.about.skillsTitle}
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {CONTENT.about.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ParallaxContainer>
      </div>
    </section>
  );
}
