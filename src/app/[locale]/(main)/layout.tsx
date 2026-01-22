import { Footer } from '@/src/components/footer/Footer';
import { NavBar } from '@/src/components/navbar/navbar';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="relative z-50 flex justify-center">
        <nav className="bg-card/80 fixed flex w-full flex-row-reverse items-center justify-between border px-8 py-4 backdrop-blur-sm lg:top-8 lg:w-170 lg:flex-row lg:rounded-full">
          <NavBar />
        </nav>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="border-t p-4">
        <Footer />
      </footer>
    </>
  );
}
