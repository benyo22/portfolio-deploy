export function GridBackground() {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
      style={{
        maskImage:
          'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
      }}
    />
  );
}
