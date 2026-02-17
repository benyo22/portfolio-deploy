import { Suspense, lazy } from 'react';

import { GlowingLine } from '../ui/glowing-line';
import { GridBackground } from '../ui/grid-background';
import { Spotlight } from '../ui/spotlight';
import { Hero } from './hero';

const VirtualMacbookWindow = lazy(() =>
  import('./virtual-macbook-window').then((mod) => ({
    default: mod.VirtualMacbookWindow,
  }))
);

export function Home() {
  return (
    <>
      <section
        className="grid min-h-screen w-full grid-cols-1 gap-64 px-4 pt-32 pb-16 lg:grid-cols-2 xl:px-16 xl:pb-32"
        aria-label="Hero section"
      >
        <GridBackground />
        <Spotlight colorClass="bg-primary/10" position="left" offset={0} />

        <Hero />
        <Suspense fallback={null}>
          <VirtualMacbookWindow />
        </Suspense>
      </section>

      <GlowingLine />
    </>
  );
}
