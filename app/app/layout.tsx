"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconHome, IconPaw, IconCalendar, IconBuildingCastle, IconDog } from "@tabler/icons-react"

const NAV = [
  { href: "/app",          label: "Inicio",   Icon: IconHome },
  { href: "/app/mascotas", label: "Mascotas", Icon: IconPaw },
  { href: "/app/citas",    label: "Citas",    Icon: IconCalendar },
  { href: "/app/hotel",    label: "Hotel",    Icon: IconBuildingCastle },
  { href: "/app/cursos",   label: "K9",       Icon: IconDog },
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <div style={{ minHeight: "100dvh", background: "#ffffff" }}>

      {/* ── HEADER fijo — nunca baila ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 40, height: 54,
        background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid #e5e7eb",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="/icons/icon-192.png"
            alt="Vet & Pets"
            style={{ width: 28, height: 28, borderRadius: 8, objectFit: "cover" }}
          />
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>
            Vet &amp; Pets
          </span>
        </div>
        {/* Avatar usuario — inicial, no emoji */}
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: "#dc2626",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "-.5px",
        }}>
          SR
        </div>
      </header>

      {/* ── MAIN — padding bottom = nav + safe-area ── */}
      <main style={{
        paddingBottom: "calc(62px + env(safe-area-inset-bottom, 0px) + 8px)",
        maxWidth: 600,
        margin: "0 auto",
        background: "#ffffff",
      }}>
        {children}
      </main>

      {/* ── BOTTOM NAV — con safe-area para iPhone ── */}
      <nav style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 40,
        display: "grid", gridTemplateColumns: "repeat(5,1fr)",
        height: "calc(62px + env(safe-area-inset-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid #e5e7eb",
      }}>
        {NAV.map(({ href, label, Icon }) => {
          const active = path === href
          return (
            <Link key={href} href={href} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 3, textDecoration: "none",
              paddingTop: 4,
            }}>
              <Icon
                size={22}
                stroke={active ? 2.2 : 1.5}
                color={active ? "#dc2626" : "#9ca3af"}
              />
              <span style={{
                fontSize: 9.5,
                fontWeight: active ? 700 : 500,
                color: active ? "#dc2626" : "#9ca3af",
                letterSpacing: active ? ".02em" : 0,
              }}>
                {label}
              </span>
            </Link>
          )
        })}
      </nav>

    </div>
  )
}
