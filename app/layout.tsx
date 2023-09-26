import { Metadata } from "next"

import "@/styles/globals.css"
import NavbarWithProjects from "@/components/NavbarWithProjects"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Bruno Gurgel",
    template: "%s | Bruno Gurgel",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  openGraph: {
    title: "Bruno Gurgel",
    description:
      "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavbarWithProjects />
          <main className="prose flex min-h-screen w-full flex-col items-start p-20 dark:prose-invert lg:prose-xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
