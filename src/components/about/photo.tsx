'use client';

import Image from 'next/image';

import { FadeIn } from '../ui/fade-in';

export function Photo() {
  return (
    <FadeIn direction="left" delay={0}>
      <div className="relative shrink-0 select-none">
        <div className="border-border/50 bg-muted relative mx-auto size-48 overflow-hidden rounded-full border-4 shadow-xl lg:size-80">
          <Image
            src="/cv_photo.jpeg"
            alt="Farkas Bence"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 192px, 320px"
          />
        </div>
      </div>
    </FadeIn>
  );
}
