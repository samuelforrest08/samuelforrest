import "./globals.css";

import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { doge } from "./doge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"]
});

export const metadata = {
  title: {
    default: "Samuel Forrest",
    template: "%s | Samuel Forrest",
  },
  description:
    "Samuel Forrest — software developer, A Level student in the UK, incoming Software Developer Degree Apprentice at Barclays.",
  openGraph: {
    title: "Samuel Forrest",
    description:
      "Samuel Forrest — software developer, A Level student in the UK, incoming Software Developer Degree Apprentice at Barclays.",
    url: "https://samuelforrest.me",
    siteName: "Samuel Forrest",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@samuelforrest",
  },
  metadataBase: new URL("https://samuelforrest.me"),
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${inter.className} antialiased dark`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${doge.toString()})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Samuel Forrest",
              url: "https://samuelforrest.me",
              jobTitle: "Software Developer Degree Apprentice",
              worksFor: { "@type": "Organization", name: "Barclays" },
              knowsAbout: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Web Development"],
              sameAs: ["https://linkedin.com/in/#", "https://github.com/#", "https://youtube.com/@#", "https://instagram.com/#"],
            }),
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="px-6 py-6 md:px-8 md:py-8 min-h-screen">
          <Header />
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
