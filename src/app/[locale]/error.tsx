'use client';

import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { CircleX, RotateCcw } from 'lucide-react';

import { Button } from '@/src/components/ui/button';
import { GridBackground } from '@/src/components/ui/grid-background';
import { Spotlight } from '@/src/components/ui/spotlight';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('errors.error');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <motion.div
      className="text-foreground relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <GridBackground />

      <Spotlight colorClass="bg-destructive/10" position="top" offset={0} />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* The big icon */}
        <h1 className="relative flex items-center justify-center gap-2 text-[10rem] leading-none font-black tracking-tighter select-none sm:gap-4 sm:text-[14rem]">
          <div className="relative flex items-center justify-center">
            {/* Glow behind the icon */}
            <motion.div
              className="bg-destructive/40 absolute inset-0 rounded-full blur-[50px]"
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

            {/* The floating icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -15, 0],
              }}
              transition={{
                scale: { type: 'spring', duration: 2, delay: 0.1 },
                opacity: { duration: 0.5, delay: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                },
              }}
            >
              <CircleX className="text-destructive fill-destructive/10 size-24 drop-shadow-[0_0_15px_rgba(var(--destructive),0.5)] sm:size-36" />
            </motion.div>
          </div>
        </h1>

        {/* Title */}
        <h2 className="text-destructive mt-8 text-2xl font-medium sm:text-3xl">
          {t('title')}
        </h2>

        {/* Action Button */}
        <Button
          onClick={() => reset()}
          size="lg"
          variant="default"
          className="shadow-destructive/10 hover:shadow-destructive/20 mt-8 cursor-pointer gap-2 rounded-full px-8 shadow-lg transition-all duration-300"
        >
          <RotateCcw className="size-4" />
          {t('button')}
        </Button>
      </div>
    </motion.div>
  );
}
