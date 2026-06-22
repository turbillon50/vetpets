"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconHome, IconPaw, IconCalendar, IconBuildingCastle,
  IconDog, IconUser
} from "@tabler/icons-react"

const NAV = [
  { href: "/app",           label: "Inicio",    Icon: IconHome },
  { href: "/app/mascotas",  label: "Mascotas",  Icon: IconPaw },
  { href: "/app/citas",     label: "Citas",     Icon: IconCalendar },
  { href: "/app/hotel",     label: "Hotel",     Icon: IconBuildingCastle },
  { href: "/app/cursos",    label: "Cursos",    Icon: IconDog },
  { href: "/app/perfil",    label: "Perfil",    Icon: IconUser },
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Sidebar desktop */}
      <aside style={{
        display: "none",
        position: "fixed", left: 0, top: 0, height: "100%", width: 220,
        background: "var(--void)", borderRight: "1px solid var(--border)",
        flexDirection: "column", padding: "24px 12px",
        // show on md+
      }} className="md-sidebar">
        <style>{`.md-sidebar { @media(min-width:768px){display:flex!important} }`}</style>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px", marginBottom: 36 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width: 32, height: 32, borderRadius: 10 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--txt)" }}>Vet & Pets</div>
            <div style={{ fontSize: 10, color: "var(--txt3)" }}>Sofía Ramírez</div>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV.map(({ href, label, Icon }) => {
            const active = path === href
            return (
              <Link key={href} href={href} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                borderRadius: 12, textDecoration: "none", fontSize: 13, fontWeight: 500,
                transition: "all 0.2s ease",
                ...(active
                  ? { background: "rgba(185,28,28,0.12)", color: "#f87171", border: "1px solid rgba(185,28,28,0.2)" }
                  : { color: "var(--txt3)", border: "1px solid transparent" }),
              }}>
                <Icon size={17} stroke={active ? 2 : 1.5} />
                {label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Header mobile */}
      <header style={{
        position: "sticky", top: 0, zIndex: 30,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px", height: 54,
        background: "rgba(8,6,16,0.92)", borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width: 30, height: 30, borderRadius: 8 }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--txt)" }}>Vet & Pets</span>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--red-2), var(--red))",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: "var(--txt)",
        }}>SR</div>
      </header>

      <main style={{ padding: "20px 16px", maxWidth: 680, margin: "0 auto", paddingBottom: 100 }}>
        {children}
      </main>

      {/* Bottom nav mobile */}
      <nav style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 30,
        display: "grid", gridTemplateColumns: "repeat(5,1fr)", height: 64,
        background: "rgba(8,6,16,0.96)", borderTop: "1px solid var(--border)",
        backdropFilter: "blur(24px)",
      }}>
        {NAV.slice(0, 5).map(({ href, label, Icon }) => {
          const active = path === href
          return (
            <Link key={href} href={href} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 3, textDecoration: "none",
            }}>
              <Icon size={20} stroke={active ? 2 : 1.5} style={{ color: active ? "#f87171" : "var(--txt3)" }} />
              <span style={{ fontSize: 9, color: active ? "#f87171" : "var(--txt3)", fontWeight: active ? 600 : 400 }}>{label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
