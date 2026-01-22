import { memo } from 'react';

type SpotlightProps = {
  colorClass?: string;
  position?: 'top' | 'bottom' | 'left';
  offset?: number;
};
export const Spotlight = memo(function Spotlight({
  colorClass,
  position,
  offset,
}: SpotlightProps) {
  const positionStyle =
    position === 'top'
      ? { top: offset }
      : position === 'bottom'
        ? { bottom: offset }
        : { left: offset };
  return (
    <div
      style={positionStyle}
      className={`${colorClass} pointer-events-none absolute left-1/2 h-100 w-150 -translate-x-1/2 rounded-full mix-blend-multiply blur-[120px] dark:mix-blend-screen`}
    />
  );
});
