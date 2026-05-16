import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Samuel Forrest",
  description:
    "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
  authors: [{ name: "Samuel Forrest", url: "https://samuelforrest.co.uk" }],
  creator: "Samuel Forrest",
  publisher: "Samuel Forrest",
  keywords: [
    "Samuel Forrest",
    "samuelforrest.co.uk",
    "samuelforrest.me",
    "Software Engineer",
    "Computer Science Student",
    "A-Level Student London",
    "Web Developer",
    "Private Tutor",
    "Entrepreneur",
    "Tradelingo",
    "Portfolio",
    "Software Development",
    "Programming",
    "Mathematics",
    "Physics",
    "Degree Apprenticeships",
    "St Georges Weybridge",
    "Work Experience",
    "British Airways",
    "Amazon",
    "Virgin Atlantic",
    "Samuel James Forrest",
    "Samuel Forrest Blog",
  ],
  metadataBase: new URL("https://samuelforrest.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Samuel Forrest",
    description:
      "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
    url: "https://samuelforrest.co.uk",
    siteName: "Samuel Forrest",
    images: [
      {
        url: "/images/samuelforrest.webp",
        width: 1200,
        height: 630,
        alt: "Samuel Forrest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Forrest",
    description:
      "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
    images: ["/images/samuelforrest.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Portfolio",
  classification: "Portfolio Website",
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Samuel Forrest" />
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Samuel Forrest",
                url: "https://samuelforrest.co.uk",
                image: "https://samuelforrest.co.uk/images/samuelforrest.webp",
                jobTitle: "Software Developer & A-Level Student",
                description:
                  "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
                alumniOf: "St George's Weybridge",
                knowsAbout: [
                  "Software Engineering",
                  "Web Development",
                  "Computer Science",
                  "Mathematics",
                  "Physics",
                  "Private Tutoring",
                ],
                sameAs: [
                  "https://www.linkedin.com/in/samuelforrest08/",
                  "https://github.com/samuelforrest08",
                  "https://www.youtube.com/@samuelforrest08",
                  "https://www.instagram.com/samuelforrest08/",
                ],
                address: {
                  "@type": "Place",
                  addressLocality: "London",
                  addressCountry: "UK",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Samuel Forrest",
                url: "https://samuelforrest.co.uk",
                description:
                  "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO of Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
                author: {
                  "@type": "Person",
                  name: "Samuel Forrest",
                },
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-zinc-950 tracking-tight antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col font-(family-name:--font-inter-tight)">
          <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
            {children}
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-PQ9CV0Y4G2" />
    </html>
  );
}
