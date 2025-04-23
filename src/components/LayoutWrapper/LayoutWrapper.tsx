'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = ['/navigation'];

  const shouldUseLayout = !noLayoutRoutes.includes(pathname);

  if (!shouldUseLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
