import type { Metadata } from "next"
import "./globals.css"
import DemoModeSwitcher from "@/components/demo-mode-switcher"

export const metadata: Metadata = {
  title: "Vet & Pets Care",
  description: "Clínica Veterinaria · Instituto K9 · Hotel Campestre — Apan, Hidalgo. 20 años de experiencia.",
  manifest: "/manifest.json",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <DemoModeSwitcher />
      </body>
    </html>
  )
}
