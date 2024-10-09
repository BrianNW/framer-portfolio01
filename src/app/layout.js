import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'

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
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <div className ="h-24">
            <Navbar />
          </div>
          <div className ="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
