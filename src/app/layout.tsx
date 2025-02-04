import { Inter, Julee } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import "./globals.css";

const fontSans = Inter({
   subsets: ["latin"],
   variable: "--font-sans",
});

const julee = Julee({
   weight: ["400"],
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Sushi App",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR" suppressHydrationWarning
         className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable, julee
         )}>
         <body
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}