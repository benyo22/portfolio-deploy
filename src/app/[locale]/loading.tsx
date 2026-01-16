'use client';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import { GridBackground } from '@/src/components/ui/grid-background';
import { Spinner } from '@/src/components/ui/spinner';

export default function Loading() {
  const t = useTranslations('common');

  return (
    <div className="text-foreground relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <GridBackground />

      {/* Top Spotlight */}
      <div className="bg-primary/20 absolute top-0 left-1/2 h-100 w-150 -translate-x-1/2 rounded-full mix-blend-screen blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* The spinner */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* The glow behind the spinner */}
          <motion.div
            className="bg-primary/40 absolute inset-0 rounded-full blur-[60px]"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Spinner className="text-primary size-30" />
        </div>

        {/* Title */}
        <h2 className="text-foreground animate-pulse text-2xl font-medium sm:text-3xl">
          {t('loading')}
        </h2>

        {/* Message */}
        <p className="text-muted-foreground/80 mt-2 text-sm">
          {t('pleaseWait')}
        </p>
      </div>
    </div>
  );
}
