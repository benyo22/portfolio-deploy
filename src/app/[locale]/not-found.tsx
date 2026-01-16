'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

import { Button } from '@/src/components/ui/button';
import { GridBackground } from '@/src/components/ui/grid-background';
import { Spotlight } from '@/src/components/ui/spotlight';

export default function NotFound() {
  const t = useTranslations('errors.notFound');

  return (
    <motion.div
      className="text-foreground relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <GridBackground />

      <Spotlight colorClass="bg-primary/20" position="top" offset={0} />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* The big 4 */}
        <h1 className="relative flex items-center justify-center gap-2 text-[10rem] leading-none font-black tracking-tighter select-none sm:gap-4 sm:text-[14rem]">
          <span className="from-foreground to-foreground/20 bg-linear-to-b bg-clip-text text-transparent drop-shadow-2xl">
            4
          </span>

          {/* The mouse */}
          <div className="flex items-center justify-center">
            {/* The glow behind the mouse */}
            <motion.div
              className="bg-primary/40 absolute inset-0 rounded-full blur-[50px]"
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

            {/* The floating mouse */}
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
              <Mouse className="text-primary fill-primary/20 size-28 drop-shadow-[0_0_15px_rgba(var(--primary),0.5)] sm:size-40" />
            </motion.div>
          </div>

          {/* The other big 4 */}
          <span className="from-foreground to-foreground/20 bg-linear-to-b bg-clip-text text-transparent drop-shadow-2xl">
            4
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-muted-foreground mt-8 text-2xl font-medium sm:text-3xl">
          {t('title')}
        </h2>

        {/* Message */}
        <p className="text-muted-foreground/80 mt-2 mb-8">{t('message')}</p>

        {/* Button */}
        <Button
          asChild
          size="lg"
          className="shadow-primary/20 hover:shadow-primary/40 rounded-full px-8 shadow-lg transition-all duration-300"
        >
          <Link href="/home">{t('button')}</Link>
        </Button>
      </div>
    </motion.div>
  );
}
