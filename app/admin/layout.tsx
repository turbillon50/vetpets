"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconLayoutDashboard, IconCalendar, IconPaw,
  IconBuildingCastle, IconDog, IconPackage
} from "@tabler/icons-react"

const NAV = [
  { href: "/admin",             label: "Dashboard", Icon: IconLayoutDashboard },
  { href: "/admin/citas",       label: "Agenda",    Icon: IconCalendar },
  { href: "/admin/pacientes",   label: "Pacientes", Icon: IconPaw },
  { href: "/admin/hotel",       label: "Hotel",     Icon: IconBuildingCastle },
  { href: "/admin/instituto",   label: "K9",        Icon: IconDog },
  { href: "/admin/inventario",  label: "Inventario",Icon: IconPackage },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <aside style={{
        position: "fixed", left: 0, top: 0, height: "100%", width: 220,
        background: "var(--void)", borderRight: "1px solid var(--border)",
        display: "flex", flexDirection: "column", padding: "24px 12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px", marginBottom: 32 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width: 32, height: 32, borderRadius: 10 }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--txt)" }}>Panel Admin</div>
            <div style={{ fontSize: 10, color: "var(--red-2)", fontWeight: 600 }}>Dr. Alberto Mendoza</div>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
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
                <Icon size={17} stroke={active ? 2 : 1.5} />{label}
              </Link>
            )
          })}
        </nav>
        <div style={{ fontSize: 9, color: "var(--txt3)", textAlign: "center", padding: "12px 0" }}>
          vetpets.store · v1.0
        </div>
      </aside>
      <main style={{ marginLeft: 220, padding: "28px 28px 100px", maxWidth: 960 }}>
        {children}
      </main>
    </div>
  )
}
