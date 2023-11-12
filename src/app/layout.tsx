import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Anaya - Web/Mobile Developer",
  description:
    " Explore the personal portfolio of Alan Anaya, a talented web and mobile developer. Discover a showcase of innovative projects, technical skills, and professional experience in web and mobile development. Learn how Alan can help bring your ideas to life with cutting-edge solutions.",
  keywords:
    "Alan Anaya, web developer, mobile developer, portfolio, projects, skills, experience, solutions, software engineer, front-end developer, back-end developer, full-stack developer, app development, website development, coding, programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased leading-relaxed text-slate-400 selection:bg-sky-800 selection:text-sky-500 bg-gradient-to-b from-slate-900 to-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
