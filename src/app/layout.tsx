import "./globals.css";
import { Inter } from "next/font/google";
import { metadata } from "@/constants/metadata";

export { metadata };

const font = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
