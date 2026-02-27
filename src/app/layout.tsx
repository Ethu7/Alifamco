import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alifamco | Data Privacy Consulting",
  description:
    "Ali Family Company (Alifamco) is a boutique data privacy consulting firm specializing in OneTrust, BigID, Securiti, and TrustArc implementations. Expert privacy strategy and compliance services for enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          src="https://link.novaluxai.com/js/form_embed.js"
          type="text/javascript"
          async
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <ConvexClientProvider>
          <div className="flex min-h-screen flex-col bg-surface-900">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
