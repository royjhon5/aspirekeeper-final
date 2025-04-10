import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aspire Keeper Solutions",
    description:
      "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency",
    robots: "index, follow",
    keywords: [
      "diagnostics",
      "thera",
      "doctors appointment",
    ],
    openGraph: {
      url: "",
      type: "website",
      title: "Aspire Keeper Solutions",
      description:
        "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency",
      siteName: "TheraDiagnostics",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Aspire Keeper Solutions Thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Aspire Keeper Solutions",
      description:
        "Aspire Keeper handles your tasks and to-do lists, so you can focus on achieving your goals. We offer virtual assistance to streamline work and boost efficiency",
      creator: "@rjdev",
      site: "@rjdev",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "Aspire Keeper Solutions Thumbnail",
        },
      ],
    },
    alternates: {
      canonical: "",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" sizes="32x32" />

            {/* Apple Touch Icons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                    {children}
            </body>
        </html>
    );
};
