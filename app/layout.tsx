import type { Metadata } from "next"
import "./globals.css"
import DemoModeSwitcher from "@/components/demo-mode-switcher"

export const metadata: Metadata = {
  title: "Vet & Pets Care",
  description: "Clínica Veterinaria · Instituto K9 · Hotel Campestre — Apan, Hidalgo. 20 años de experiencia.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <DemoModeSwitcher />
      </body>
    </html>
  )
}
