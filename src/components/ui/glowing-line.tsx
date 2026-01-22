'use client';

import { memo } from 'react';

import { motion } from 'framer-motion';

export const GlowingLine = memo(function GlowingLine() {
  return (
    <div className="flex items-end justify-center">
      <motion.div
        initial={{ width: '0%', opacity: 0 }}
        whileInView={{ width: '50%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="to-primary relative h-px bg-linear-to-r from-transparent"
      >
        <div className="to-primary absolute inset-x-0 bottom-0 mb-0.5 h-1 bg-linear-to-r from-transparent opacity-70 blur-md" />

        <div className="to-primary absolute inset-x-0 top-0 mt-0.5 h-1 bg-linear-to-r from-transparent opacity-70 blur-md" />
      </motion.div>

      <motion.div
        initial={{ width: '0%', opacity: 0 }}
        whileInView={{ width: '50%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="to-primary relative h-px bg-linear-to-l from-transparent"
      >
        <div className="to-primary absolute inset-x-0 bottom-0 mb-0.5 h-1 bg-linear-to-l from-transparent opacity-70 blur-md" />

        <div className="to-primary absolute inset-x-0 top-0 mt-0.5 h-1 bg-linear-to-l from-transparent opacity-70 blur-md" />
      </motion.div>
    </div>
  );
});
