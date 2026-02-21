"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-text-primary text-white px-4 py-2 rounded-[12px] text-sm font-medium shadow-lg whitespace-nowrap z-10"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
