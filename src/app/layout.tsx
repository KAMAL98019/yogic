import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = "https://sriSairamHomeopathy.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Anbarasi Subramaniam | Sri Sai Ram Homeopathy Clinic",
  description:
    "Sri Sai Ram Homeopathy Clinic in Salem, led by Dr. Anbarasi Subramaniam BHMS., MD.(AM). Holistic wellness through homeopathy, traditional yogasana, meditation and mindful living.",
  openGraph: {
    title: "Dr. Anbarasi Subramaniam | Sri Sai Ram Homeopathy Clinic",
    description:
      "Holistic wellness through homeopathy, traditional yogasana, meditation and mindful living, at Sri Sai Ram Homeopathy Clinic, Salem.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
