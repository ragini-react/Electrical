"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#1a1a1a] dark:via-[#252525] dark:to-[#1a1a1a]">
      <div className="text-center">
        <motion.div
          className="relative inline-block"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Zap className="text-yellow-400" size={64} />
        </motion.div>
        
        <motion.div
          className="mt-4 flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        <motion.p
          className="mt-4 text-white text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
