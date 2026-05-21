'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-display font-bold text-gradient"
      >
        Nuvirexa
      </motion.div>
      <div className="mt-6 w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent-violet to-transparent"
        />
      </div>
    </div>
  )
}
