"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Layer 1 - Slowest */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Layer 2 - Medium */}
      <motion.div style={{ y: y2, opacity }} className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-teal-400/15 to-cyan-400/15 rounded-full blur-2xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-violet-400/15 to-indigo-400/15 rounded-full blur-2xl" />
      </motion.div>

      {/* Layer 3 - Fastest */}
      <motion.div style={{ y: y3, opacity }} className="absolute inset-0">
        <div className="absolute top-60 left-1/2 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-60 right-1/2 w-56 h-56 bg-gradient-to-r from-rose-400/10 to-red-400/10 rounded-full blur-xl" />
      </motion.div>
    </div>
  )
}
