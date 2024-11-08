import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import { AnimatePresence } from "framer-motion";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Briannw Portfolio App",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 100 vh and 100vw */}
           
        <TransitionProvider />
      </body>
    </html>
  );
}
