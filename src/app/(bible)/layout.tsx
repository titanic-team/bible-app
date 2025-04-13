import { Navbar } from "@/components/layout/navbar";

interface BibleLayoutProps {
  children: React.ReactNode;
}

export default function BibleLayout({ children }: BibleLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
