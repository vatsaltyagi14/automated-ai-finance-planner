import {Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter =Inter({subset:['latin']});

export const metadata = {
  title: "AIntBroke",
  description: "Automated AI Finance Planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {}
          <Header />
          <main className = "min-h-screen">{children}</main> 
          {}
          <footer className = "bg-blue-50 w-full py-12">
            <div className = "container mx-auto px-4 text-center text-gray-600">
              <p>Made by vatsi</p>
            </div>
          </footer>
      </body>
    </html>
  );
}
