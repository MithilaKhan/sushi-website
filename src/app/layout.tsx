import type { Metadata } from "next";
import { Dancing_Script, Lora, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/provider/ThemeProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
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
    <html lang="en">
      <body
        className={`${lora.variable} ${poppins.variable} ${dancingScript.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
