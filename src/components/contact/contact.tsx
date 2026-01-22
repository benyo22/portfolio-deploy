'use client';

import dynamic from 'next/dynamic';

import { GlowingLine } from '../ui/glowing-line';
import { Spotlight } from '../ui/spotlight';
import { ContactInfo } from './contact-info';

// Lazy load form to reduce initial bundle size
const ContactForm = dynamic(
  () => import('./contact-form').then((mod) => ({ default: mod.ContactForm })),
  {
    loading: () => null,
  }
);

export function Contact() {
  return (
    <>
      <section
        className="grid min-h-screen w-full grid-cols-1 items-center gap-16 px-4 pt-32 pb-16 lg:grid-cols-2 lg:gap-64 xl:px-16 xl:pb-32"
        aria-label="Contact information and form"
      >
        <Spotlight colorClass="bg-primary/5" position="bottom" offset={0} />

        <ContactInfo />

        <ContactForm />
      </section>

      <GlowingLine />
    </>
  );
}
