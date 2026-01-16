import { GlowingLine } from '../ui/glowing-line';
import { GridBackground } from '../ui/grid-background';
import { Spotlight } from '../ui/spotlight';
import { Hero } from './hero';
import { VirtualMacbookWindow } from './virtual-macbook-window';

export function Home() {
  return (
    <>
      <section className="grid min-h-screen w-full grid-cols-1 gap-64 px-4 pt-32 pb-16 lg:grid-cols-2 xl:px-16 xl:pb-32">
        <GridBackground />
        <Spotlight colorClass="bg-primary/10" position="left" offset={0} />

        <Hero />
        <VirtualMacbookWindow />
      </section>

      <GlowingLine />
    </>
  );
}
