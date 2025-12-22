import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
