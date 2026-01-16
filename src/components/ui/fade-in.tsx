import { useFadeIn } from '@/src/hooks/use-fade-in';

type Direction = 'top' | 'bottom' | 'left' | 'right';

type FadeInProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number; // ms
};

export function FadeIn({ children, direction = 'bottom', delay }: FadeInProps) {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  const dirClass = {
    top: 'from-top',
    bottom: 'from-bottom',
    left: 'from-left',
    right: 'from-right',
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-in ${dirClass} ${visible ? 'show' : ''}`}
    >
      {children}
    </div>
  );
}
