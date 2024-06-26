import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import HeaderPage from "@/components/HeaderPage";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeWise",
  description: "Plataforma de Cursos Gratuitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
