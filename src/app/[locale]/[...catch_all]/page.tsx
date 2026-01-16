import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  // This page catches every route under [locale]
  // and activates not-found.tsx
  notFound();
}
