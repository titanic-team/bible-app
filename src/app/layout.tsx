import "./globals.css";
import { Gabarito, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { metadata } from "@/constants/metadata";

export { metadata };

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`antialiased ${inter.variable} ${gabarito.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
