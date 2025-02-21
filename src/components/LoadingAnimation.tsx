'use client';

import { motion } from 'framer-motion';

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50"
        />

        {/* Inner Circle with Text */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-32 h-32"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-xs">
              <textPath href="#circle" className="fill-white">
                AI АГЕНТСТВО • ИНВЕСТИЦИИ • AI АГЕНТСТВО • ИНВЕСТИЦИИ •
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center">
            <motion.span
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
            >
              AI
            </motion.span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.p
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white text-xl font-light"
          >
            Подготовка презентации
          </motion.p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          />
        </div>

        {/* Investment Numbers */}
        <div className="absolute top-1/2 -right-40 transform -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="text-right"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-4xl font-bold gradient-text">70-85%</span>
              <p className="text-gray-400 text-sm">маржинальность</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 -left-40 transform -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="text-left"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-4xl font-bold gradient-text">$50K+</span>
              <p className="text-gray-400 text-sm">месячный оборот</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 