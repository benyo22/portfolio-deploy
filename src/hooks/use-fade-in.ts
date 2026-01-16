import { useEffect, useRef, useState } from 'react';

export function useFadeIn<T extends HTMLElement>(offset = '-80px') {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin: offset }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [offset]);

  return { ref, visible };
}
