import type { Metadata } from "next"
import "./globals.css"
import DemoModeSwitcher from "@/components/demo-mode-switcher"

export const metadata: Metadata = {
  title: "Vet & Pets Care — Clínica Veterinaria · Instituto K9 · Hotel Campestre",
  description: "20 años de experiencia. Servicio médico veterinario en pequeñas y grandes especies. Estética canina y hotel campestre en Apan, Hidalgo.",
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
