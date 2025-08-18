"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Zap, Star } from "lucide-react"

const floatingIcons = [
  { Icon: Code, delay: 0, x: "10%", y: "20%" },
  { Icon: Palette, delay: 0.5, x: "80%", y: "15%" },
  { Icon: Smartphone, delay: 1, x: "15%", y: "70%" },
  { Icon: Globe, delay: 1.5, x: "85%", y: "75%" },
  { Icon: Zap, delay: 2, x: "50%", y: "10%" },
  { Icon: Star, delay: 2.5, x: "70%", y: "50%" },
]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.8, 0.2],
            scale: [0, 1.2, 0.8, 1.5, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 text-blue-400/30" />
        </motion.div>
      ))}
    </div>
  )
}
