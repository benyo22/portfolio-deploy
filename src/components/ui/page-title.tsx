export function PageTitle({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-foreground text-5xl font-bold lg:text-7xl">
        {title}
      </h1>
      <div className="bg-primary mx-auto mt-4 h-1 w-24 rounded-full" />
    </div>
  );
}
