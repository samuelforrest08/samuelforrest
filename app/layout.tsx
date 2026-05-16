import "./globals.css";

import { Inter, Geist_Mono } from "next/font/google";
import { Header } from "./header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"],
});

export const metadata = {
  title: "Samuel Forrest",
  description:
    "Samuel Forrest — software developer, A Level student in the UK, incoming Software Developer Degree Apprentice at Barclays.",
  openGraph: {
    title: "Samuel Forrest",
    description:
      "Samuel Forrest — software developer, A Level student in the UK, incoming Software Developer Degree Apprentice at Barclays.",
    url: "https://samuelforrest.me",
    siteName: "Samuel Forrest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@samuelforrest08",
  },
  metadataBase: new URL("https://samuelforrest.me"),
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${inter.className} antialiased dark`}
      suppressHydrationWarning={true}
    >
      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="px-6 py-6 md:px-8 md:py-8 min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
