import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AntProvider from "../lib/provider/AntProvider";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sushi Restaurant",
  description: "Experience the best Sushi in town.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground`}
        >
          <Toaster position="top-center" duration={2000} />
          {children}
        </body>
      </html>
    </AntProvider>
  );
}
